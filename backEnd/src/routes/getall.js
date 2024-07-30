require('dotenv').config()
const Product = require('../models/product')
const Category = require('../models/category')
const Banner = require('../models/banner')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
//const OTP = require('../models/OTP')
const otpGenerator = require("otp-generator");
const User = require('../models/user')
// const Product = require('../models/product')
// const Auth = require('../middleware/mid')




router.get('/banner', async(req, res)=> {

const banner = await Banner.find({})

   console.log(banner)  
      res.status(200).json({
        success: true,
       data: banner
      })
})

router.get('/cart', async(req, res)=> {

  const cart = await User.find({})
		

   console.log(cart)  
      res.status(200).json({
        success: true,
       data: cart
      })

})

router.get('/category', async(req, res)=> {

const category = await Category.find({})

  console.log(category)  
      res.status(200).json({
        success: true,
       data: category
      })

})

router.get('/order', async(req, res)=> {

  const order = await User.find({})
		
   console.log(order)  
      res.status(200).json({
        success: true,
       data: order
      })


})

router.get('/product', async(req, res)=> {
    
const product = await Product.find({})

   console.log(product)  
      res.status(200).json({
        success: true,
       data: product
      })

})

router.get('/user', async(req, res)=> {

  const user = await User.find({})

   console.log(user)  
      res.status(200).json({
        success: true,
       data: user
      })

})





















module.exports = router;
