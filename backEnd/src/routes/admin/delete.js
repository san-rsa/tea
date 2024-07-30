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






 

router.delete('/banner/:id', async (req, res, next) => {
    try {
        const data = await Banner.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});



router.delete('/cart/:id', async (req, res, next) => {
    try {
        const data = await Banner.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});



router.delete('/category/:id', async (req, res, next) => {
    try {
        const data = await Category.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});


router.delete('/order/:id', async (req, res, next) => {
    try {
        const data = await Banner.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});


router.delete('/product/:id', async (req, res, next) => {
    try {
        const data = await Product.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});


router.delete('/user/:id', async (req, res, next) => {
    try {
        const data = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});


// router.delete('/banner/:id', async (req, res, next) => {
//     try {
//         const data = await Banner.findByIdAndRemove(req.params.id);
//         res.status(200).json({
//             msg: data,
//         });
//     } catch (error) {
//         return next(error);
//     }
// });


// router.delete('/banner/:id', async (req, res, next) => {
//     try {
//         const data = await Banner.findByIdAndRemove(req.params.id);
//         res.status(200).json({
//             msg: data,
//         });
//     } catch (error) {
//         return next(error);
//     }
// });

module.exports = router;




