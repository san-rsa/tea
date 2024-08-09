require('dotenv').config()
const User = require('../models/user')
const Cart = require('../models/cart')

// const Auth = require('../middleware/mid')
const express = require('express')
const router = express.Router()
// const router = new express.Router()


// router.post('/users/logout', Auth, async (req, res) => {
   
//     try {
//        req.user.tokens =  req.user.tokens.filter((token) => {
//             return token.token !== req.token 
//         })

//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send()
//     }
// })

// //Logout All 
// router.post('/users/logoutAll', Auth, async(req, res) => {
//     try {
//         req.user.tokens = []
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send()        
//     }
// })
// module.exports = router


// const csrf = require("csurf");
// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;
// const Product = require("../models/product");
// const Order = require("../models/order");
// const middleware = require("../middleware/mid");
// const {
//   userSignUpValidationRules,
//   userSignInValidationRules,
//   validateSignup,
//   validateSignin,
// } = require("../connection/validator");
// const csrfProtection = csrf();
// router.use(csrfProtection);















const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
//const OTP = require('../models/OTP')
//signup handle
const {auth, role} = require("../middleware/mid")



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

        const payload ={
            id: user._id,
            role: user.role,
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







module.exports = router;
