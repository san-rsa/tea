require('dotenv').config()
const User = require('../models/user')
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
//const OTP = require('../models/OTP')
//signup handle
const {auth, role} = require("../middleware/mid")



router.post('/register', async(req, res)=> {
    try {
        const {fname, lname, email, password, number, address,}= req.body
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
            name, email, password, role,  number, address 
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
                //httpOnly: true,  //It will make cookie not accessible on clinet side -> good way to keep hackers away
                // secure: process.env.NODE_ENV === "production",
		    sameSite: "none"

            }
            res.cookie("token", token, options

            ).status(200).json({
                success: true,
                token,
                message: "Logged in Successfully✅"

            })


            // .cookie("token", token, options
            // ).status(200).json({
            //     success: true,
            //     token,
            //     message: "Logged in Successfully✅"

            // })


        console.log(password, isMatch, process.env.JWT_SECRET,token); // -&gt; Password123: true
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

















  router.get('/user', auth, async (req, res, next) => {
    try {
        const user = req.userId

        


        const data = await User.findOne({id: req.params.id})

        console.log(user, data)

        res.json(data);
    } catch (error) {
        return next(error);
    }
})



























  router.get("/logout", auth, (req, res) => {

    return res
      .clearCookie("token")
      .status(200)
      .json({ message: "Successfully logged out 😏 🍀" });
  })








//logout
router.post('/users/logout', auth, async (req, res) => {
   
    try {

        const token = req.cookies.token;


       token =  req.user.tokens.filter((token) => {
            return token.token !== req.token 
        })

        await req.user.save()
        res.clearCookie("token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });    } catch (error) {
        res.status(500).send()
    }
})

//Logout All 
router.post('/logoutAll', auth, async(req, res) => {
    try {
        const token = req.cookies.token;

        req.user.tokens = []
        await req.user.save()
        res.clearCookie("token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });    } catch (error) {
        res.status(500).send()        
    }
})












//workinfg


// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;




//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json("Invalid username.");


     
//     // test a matching password
//     user.comparePassword(password, function(err, isMatch) {
//         if (err) throw err;

//         const token = jwt.sign({ email: user.email, password: user.password }, process.env.JWT_SECRET);


//         res.status(200).json({ token });
//         console.log(password, isMatch, process.env.JWT_SECRET,token); // -&gt; Password123: true
//     });
     


    
//     console.log( user)


// });










//Handlers from controllers
const {isStudent, isAdmin} = require('../middleware/role')





//testing protected route
router.get("/test",auth, (req,res)=>{
    res.json({
        success: true,
        message: "You are a valid Tester 👨‍💻"
    })
})
//protected routes
router.get('/student', auth, isStudent, (req,res)=>{
    res.json({
        success: true,
        message: "You are a valid Student 🧑‍🎓"
    })
})

router.get('/admin', auth, isAdmin, (req,res)=>{
    res.json({
        success: true,
        message: "You are a valid Admin 😎"
    })
})








module.exports = router;
