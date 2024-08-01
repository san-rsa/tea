let middlewareObject = {};
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());


const jwt = require('jsonwebtoken')
const User = require('../models/user')
//a middleware to check if a user is logged in or not
middlewareObject.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

middlewareObject.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/user/signin");
};

module.exports = middlewareObject;











// const auths = async(req, res, next) => {
//     try {
//         const token = req.header('Authorization').replace('Bearer ', '')
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)
//         const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
        
//         if(!user) {
//             throw new Error
//         }
//         req.token = token
//         req.user = user
//         next()
//     } catch (error) {
//         res.status(401).send({error: "Authentication required"})
//     }
// }

// module.exports = auths




const SECRET_KEY = "tttt"; // Store this securely!
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
    expiresIn: "5h",
  });
};
const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};





const auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(403).clearCookie("token");
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;
    req.userRole = data.role;
    console.log(data)
    return next();
  } catch {
    return res.sendStatus(403);
  }
};





const role = (role) => async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    
    if (user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    next();
  } catch (error) {
    console.error('Error authorizing user:', error);
    res.status(500).json({ error: 'An error occurred while authorizing the user' });
  }
};












module.exports = { generateToken, verifyToken, auth, role };