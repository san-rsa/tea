const Product = require('../models/product')
const Category = require('../models/category')
const Banner = require('../models/product')
// const Product = require('../models/product')
// const Product = require('../models/product')



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
// const Cart = require("../models/cart");
// const middleware = require("../middleware/mid");
// const {
//   userSignUpValidationRules,
//   userSignInValidationRules,
//   validateSignup,
//   validateSignin,
// } = require("../connection/validator");
// const csrfProtection = csrf();
// router.use(csrfProtection);


// // POST: handle the signup logic
// router.post("/register",
//   [
//     middleware.isNotLoggedIn,
//     userSignUpValidationRules(),
//     validateSignup,
//     passport.authenticate("local.signup", {
//       successRedirect: "/user/profile",
//       failureRedirect: "/user/signup",
//       failureFlash: true,
//     }),
//   ],
//   async (req, res) => {
//     try {
//       //if there is cart session, save it to the user's cart in db
//       if (req.session.cart) {
//         const cart = await new Cart(req.session.cart);
//         cart.user = req.user._id;
//         await cart.save();
//       }
//       // redirect to the previous URL
//       if (req.session.oldUrl) {
//         var oldUrl = req.session.oldUrl;
//         req.session.oldUrl = null;
//         res.redirect(oldUrl);
//       } else {
//         res.redirect("/user/profile");
//       }
//     } catch (err) {
//       console.log(err);
//       req.flash("error", err.message);
//       return res.redirect("/");
//     }
//   }
// );


// // POST: handle the signin logic
// router.post( "/signin",
//   [
//     middleware.isNotLoggedIn,
//     userSignInValidationRules(),
//     validateSignin,
//     passport.authenticate("local.signin", {
//       failureRedirect: "/user/signin",
//       failureFlash: true,
//     }),
//   ],
//   async (req, res) => {
//     try {
//       // cart logic when the user logs in
//       let cart = await Cart.findOne({ user: req.user._id });
//       // if there is a cart session and user has no cart, save it to the user's cart in db
//       if (req.session.cart && !cart) {
//         const cart = await new Cart(req.session.cart);
//         cart.user = req.user._id;
//         await cart.save();
//       }
//       // if user has a cart in db, load it to session
//       if (cart) {
//         req.session.cart = cart;
//       }
//       // redirect to old URL before signing in
//       if (req.session.oldUrl) {
//         var oldUrl = req.session.oldUrl;
//         req.session.oldUrl = null;
//         res.redirect(oldUrl);
//       } else {
//         res.redirect("/user/profile");
//       }
//     } catch (err) {
//       console.log(err);
//       req.flash("error", err.message);
//       return res.redirect("/");
//     }
//   }
// );

// // GET: display user's profile
// router.get("/profile", middleware.isLoggedIn, async (req, res) => {
//   const successMsg = req.flash("success")[0];
//   const errorMsg = req.flash("error")[0];
//   try {
//     // find all orders of this user
//     allOrders = await Order.find({ user: req.user });
//     res.render("user/profile", {
//       orders: allOrders,
//       errorMsg,
//       successMsg,
//       pageName: "User Profile",
//     });
//   } catch (err) {
//     console.log(err);
//     return res.redirect("/");
//   }
// });

// // GET: logout
// router.get("/logout", middleware.isLoggedIn, (req, res) => {
//   req.logout();
//   req.session.cart = null;
//   res.redirect("/");
// });













const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const OTP = require('../models/OTP')
const otpGenerator = require("otp-generator");
require('dotenv').config()
//signup handle




router.post('/banner', async(req, res)=> {
    try {
        const {text, imgUrl}= req.body

        console.log(text, imgUrl )
        // Check if All Details are there or not

		if (!text || !imgUrl ) {
			return res.status(403).json({
				success: false,
				message: "All Fields are required",
			});
		}

        //check if use already exists?
        const existingItem = await Banner.findOne({text})
        if(existingItem){
            return res.status(400).json({
                success: false,
                message: "product already exists"
            })
        }



        const banner = await Banner.create({
            text, imgUrl, description,  ingreident, categoryId, size, weight, price
        })
            // res.redirect("/login")

        return res.status(200).json({
            success: true,
            product,
            message: "banner created successfully ✅"
           
        })  
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message : "banner registration failed"
        })
       
   }  
})




router.post('/cat', async(req, res)=> {
    try {
        const {name}= req.body

        console.log(name )
        // Check if All Details are there or not

		if (!name) {
			return res.status(403).json({
				success: false,
				message: "All Fields are required",
			});
		}

        //check if use already exists?
        const existingItem = await Category.findOne({name})
        if(existingItem){
            return res.status(400).json({
                success: false,
                message: "item already exists"
            })
        }



        const cat = await Category.create({
            name, name
        })
            // res.redirect("/login")

        return res.status(200).json({
            success: true,
            cat,
            message: "user created successfully ✅"
           
        })  
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message : "product registration failed"
        })
       
   }  
})






router.post('/tea', async(req, res)=> {
    try {
        const {name, imgUrl, description,  ingreident, categoryId, size, weight, price,}= req.body

        console.log(name, imgUrl, description,  ingreident, categoryId, size, weight, price )
        // Check if All Details are there or not

		if (!name || !imgUrl ) {
			return res.status(403).json({
				success: false,
				message: "All Fields are required",
			});
		}

        //check if use already exists?
        const existingItem = await Product.findOne({name})
        if(existingItem){
            return res.status(400).json({
                success: false,
                message: "product already exists"
            })
        }



        const product = await Product.create({
            name, imgUrl, description,  ingreident, categoryId, size, weight, price
        })
            // res.redirect("/login")

        return res.status(200).json({
            success: true,
            product,
            message: "user created successfully ✅"
           
        })  
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message : "product registration failed"
        })
       
   }  
})


































module.exports = router;