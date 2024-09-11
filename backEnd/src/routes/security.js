require('dotenv').config()
const User = require('../models/user')
const Cart = require('../models/cart')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const {auth, role} = require("../middleware/mid")
const nodemailer = require("nodemailer");




router.post('/register', async(req, res)=> {
    try {
        const {fname, lname, email, password, phone, address,}= req.body
        const name = fname + ' ' + lname
        const role = 'user'

        // Check if All Details are there or not

		if (!name || !email || !password ) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

        //check if use already exists?
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }


        const user = await User.create({
            name, email, password, role,  phone, address 
        })
            // res.redirect("/login")
        console.log(name, password, email, address )

        return res.status(200).json({
            success: true,
            user,
            message: "user created successfully ✅"
           
        })  
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message : "User registration failed"
        })
       
   }  
})




router.post('/login', async(req, res)=> {



    try {
        //data fetch
        const {email, password} = req.body
        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message: "Plz fill all the details carefully"
            })
        }
        console.log(email, password)

        //check for registered User
        let user= await  User.findOne({email})
        //if user not registered or not found in database
        if(!user){
            return res.status(401).json({
                success: false,
                message: "You have to Signup First"
            })
        }

        let cart = await Cart.findOne({ userId: user._id });
        console.log(cart, req.session)
        // if there is a cart session and user has no cart, save it to the user's cart in db
        if (req.session?.cart && !cart) {
          const cart = new Cart(req.session.cart);
          cart.user = user._id;
          await cart.save();
        }
        // if user has a cart in db, load it to session
        if (cart) {
         // req.session.cart = cart;
        }

        //verify password and generate a JWt token 🔎




       user.comparePassword(password, async function(err, isMatch) {
        
        if(err) {
            //password donot matched
            return res.status(403).json({
                success: false,
                message: "Password incorrects⚠️"
            })
        }

        const token = await user.generateAuthToken()
 

        // const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "5h"});



             console.log(token);

            const options = {
                expires: new Date(Date.now() + 86400000), 
                httpOnly: true,  //It will make cookie not accessible on clinet side -> good way to keep hackers away
                secure: process.env.NODE_ENV === "production",
		        // sameSite: "none",
		        //  domain: 'https://tea-alpha.vercel.app'


            }
            res.cookie("token", token, options

            ).status(200).json({
                success: true,
                token,
                message: "Logged in Successfully✅"

            })


        console.log(password, isMatch, process.env.JWT_SECRET,token); 
    });


    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Login failure⚠️ :" + error
        })
    }

})




router.get("/autoLogin", (req, res) => {
    const cookie = req.headers.cookie;
  
    // if we received no cookies then user needs to login.
    if (!cookie || cookie === null) {
      return res.sendStatus(401);
    }
  
    return res.sendStatus(200);
  });











  router.get("/logout", auth, (req, res) => {

    return res
      .clearCookie("token")
      .status(200)
      .json({ message: "Successfully logged out 😏 🍀" });
  })







  router.post("/forgetpassword", async (req, res) => {
    try {
      // Find the user by email
      const user = await User.findOne({ email: req.body.email });
  
      // If user not found, send error message
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
  
      // Generate a unique JWT token for the user that contains the user's id
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {expiresIn: "10m",});
  
      // Send the token to the user's email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
  
      // Email configuration
      const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: req.body.email,
        subject: "Reset Password",
        html: `<h1>Reset Your Password</h1>
      <p>Click on the following link to reset your password:</p>
      <a href="${process.env.ORIGIN}/reset-password/${token}">${process.env.ORIGIN}/reset-password/${token}</a>
      <p>The link will expire in 10 minutes.</p>
      <p>If you didn't request a password reset, please ignore this email.</p>`,
      };
  
      // Send the email
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Email sent" });
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });








  router.post("reset-password", async (req, res) => {
    try {
      // Verify the token sent by the user
      const decodedToken = jwt.verify(
        req.params.token,
        process.env.JWT_SECRET_KEY
      );
  
      // If the token is invalid, return an error
      if (!decodedToken) {
        return res.status(401).send({ message: "Invalid token" });
      }
  
      // find the user with the id from the token
      const user = await User.findOneAndUpdate({ _id: decodedToken.userId }, {password: req.body.newPassword},  {new: true} );
      if (!user) {
        return res.status(401).send({ message: "no user found" });
      }
        await user.save();
  
      // Send success response
      res.status(200).send({ message: "Password updated" });
    } catch (err) {
      // Send error response if any error occurs
      res.status(500).send({ message: err.message });
    }
  });


module.exports = router;
