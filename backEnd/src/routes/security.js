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
const OTP = require('../models/OTP')
const otpGenerator = require("otp-generator");
//signup handle



router.post('/register', async(req, res)=> {
    try {
        const {fname, lname, email, password, number, address,}= req.body
        const name = fname + ' ' + lname
        const role = 'user'

        console.log(name, password, email, address )
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



        //secure password
        let hashedPassword
        try {
            hashedPassword = await bcrypt.hash(password,10)
        } catch (error) {
            return res.status(500).json({
                success: false,
                message : `Hashing pasword error for ${password}: `+error.message
            })
        }

        console.log(hashedPassword)
        const user = await User.create({
            name, email, password:hashedPassword, role,  number, address 
        })
            // res.redirect("/login")

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




// router.post('/login', async(req, res)=> {



//     try {
//         //data fetch
//         const {email, password} = req.body
//         //validation on email and password
//         if(!email || !password){
//             return res.status(400).json({
//                 success:false,
//                 message: "Plz fill all the details carefully"
//             })
//         }
//         console.log(email, password)

//         //check for registered User
//         let user= await  User.findOne({email})
//         //if user not registered or not found in database
//         if(!user){
//             return res.status(401).json({
//                 success: false,
//                 message: "You have to Signup First"
//             })
//         }

//         const payload ={
//             email: user.email,
//             id: user._id,
//             role: user.role,
//         }
//         //verify password and generate a JWt token 🔎
//         if(await bcrypt.compare(password,user.password)){

//             console.log(password );
//             //if password matched
//              //now lets create a JWT token
//              const token = jwt.sign(payload, 'tttt', {expiresIn: "5h"}
//                         );

                       

//             user = User.toObject()
//             user.tokens = token

//              console.log(token);

//             user.password = undefined
//             const options = {
//                 expires: new Date( Date.now()+ 3*24*60*60*1000),
//                 httpOnly: true  //It will make cookie not accessible on clinet side -> good way to keep hackers away

//             }
//             res.cookie(
//                 "token",
//                 token,
//                 options
//             ).status(200).json({
//                 success: true,
//                 token,
//                 user,
//                 message: "Logged in Successfully✅"

//             })

//         }else{
//             //password donot matched
//             return res.status(403).json({
//                 success: false,
//                 message: "Password incorrects⚠️"
//             })
//         }

//     } catch (error) {
//         console.error(error)
//         res.status(500).json({
//             success: false,
//             message: "Login failure⚠️ :" + error
//         })
//     }

// })





router.post("/login", async (req, res) => {
  const { email, password } = req.body;


  

  const user = await User.findOne({ email });
    
    console.log( user)
  if (!user) return res.status(400).json("Invalid username.");

  const validPassword = await bcrypt.compare(password, user.password, function(err, result) {
    console.log( user.password, password )

    if (result === true ) {
      console.log(err)
      console.log(result);
    } else{
      console.log(err);
      console.log(result);}}
    );
  console.log(validPassword)

  if (!validPassword)
    return res.status(400).json("Invalid password.");

  const token = jwt.sign({ email: user.email, password: user.password }, process.env.JWT_SECRET);




  res.send({ token });
});










//Handlers from controllers
const {auth, isStudent, isAdmin} = require('../middleware/role')





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