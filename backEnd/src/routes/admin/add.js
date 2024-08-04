require('dotenv').config()
const Product = require('../../models/product')
const Category = require('../../models/category')
const Banner = require('../../models/banner')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
//const OTP = require('../../models/OTP')
// const Product = require('../models/product')
// const Product = require('../models/product')
 const {auth} = require('../../middleware/mid')


router.post('/banner', auth, async(req, res)=> {
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
                message: "banner already exists"
            })
        }



        const banner = await Banner.create({
            text, imgUrl
        })
            // res.redirect("/login")

        return res.status(200).json({
            success: true,
            banner,
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




router.post('/category', async(req, res)=> {
    try {
        const {name, imgUrl}= req.body

        console.log(name, imgUrl )
        // Check if All Details are there or not

		if (!name || !imgUrl) {
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
                message: "category  already exists"
            })
        }



        const cat = await Category.create({
            name, name, imgUrl
        })
            // res.redirect("/login")

        return res.status(200).json({
            success: true,
            cat,
            message: "category  created successfully ✅"
           
        })  
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message : "category  registration failed"
        })
       
   }  
})






router.post('/product', async(req, res)=> {
    try {
        const {name, imgUrl, description, categoryId, small, sprice, medium, mprice, large, lprice}= req.body

        console.log(name, imgUrl, description, categoryId, small, sprice, medium, mprice, large, lprice )
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
            name, imgUrl, description, size:[{weight: small, price: sprice}, {weight: medium, price: mprice}, {weight: large, price: lprice}]

        })

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
