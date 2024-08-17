let middlewareObject = {};
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());


const jwt = require('jsonwebtoken')
const User = require('../models/user')
//a middleware to check if a user is logged in or not







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





const role =  (role)  => async (req, res, next) => {


  try {
    const user = req.userRole

    console.log(user+'oo')

    
    if (user !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    next();
  } catch (error) {
    console.error('Error authorizing user:', error);
    res.status(500).json({ error: 'An error occurred while authorizing the user' });
  }
};














module.exports = {  auth, role };