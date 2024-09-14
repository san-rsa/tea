require('dotenv').config()
const Product = require('../../models/product')
const Category = require('../../models/category')
const Banner = require('../../models/banner')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
//const OTP = require('../../models/OTP')
const otpGenerator = require("otp-generator");
const User = require('../../models/user')
// const Product = require('../models/product')
// const Auth = require('../middleware/mid')
 const {auth, role} = require('../../middleware/mid')



 




router.post('/product/:id', auth, role(process.env.ADMIN), async(req, res)=> {
    const id = req.params.id
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







    router.patch('/banner/:id' , auth, role(process.env.ADMIN), async (req, res, next) => {
        try {

            const data = await Banner.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.json(data);
            console.log(data, req.body, " updated successfully!");
        } catch (error) {
            return next(error);
        }
    });





    router.patch('/category/:id' , auth, role(process.env.ADMIN), async (req, res, next) => {
        try {

            const data = await Category.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.json(data);
            console.log(data, req.body, " updated successfully!");
        } catch (error) {
            return next(error);
        }
    });



    router.patch('/product/:id' , auth, role(process.env.ADMIN), async (req, res, next) => {

        try {
            const {name, imgUrl, description, categoryId, small, sprice, medium, mprice, large, lprice}= req.body

            console.log(name, imgUrl, description, categoryId, small, sprice, medium, mprice, large, lprice )
          

            const data = await Product.findOneAndUpdate({name: req.params.id}, {
             name,  imgUrl, description, categoryId, size:[{weight: small, price: sprice}, {weight: medium, price: mprice}, {weight: large, price: lprice}]
            }, { new: true });
            res.json(data);
            console.log(data, " updated successfully!");
        } catch (error) {
            return next(error);
        }
    });


    router.patch('/user/:id' , auth, role(process.env.ADMIN), async (req, res, next) => {
        try {

            const data = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.json(data);
            console.log(data, "user updated successfully!");
        } catch (error) {
            return next(error);
        }
    });







module.exports = router;
