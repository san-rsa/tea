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
const {auth} = require('../../middleware/mid')







router.patch('/admin' ,async (req, res, next) => {
    try {

        const data = await User.findByIdAndUpdate(req.body.productId, {
            $set: req.body, role: 'user'
        }, { new: true });
        res.json(data);
        console.log(data, "user updated successfully!");
    } catch (error) {
        return next(error);
    }
});


 

router.delete('/banner', auth, async (req, res, next) => {
    const id = req.body.productId

    try {
        const data = await Banner.findByIdAndDelete(id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});



router.delete('/cart/:id', async (req, res, next) => {
    try {
        const data = await Banner.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});



router.delete('/category', auth, async (req, res, next) => {

    const id = req.body.productId

    try {

        const data = await Category.findByIdAndDelete(id);
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


router.delete('/product/', async (req, res, next) => {
    try {
        const id = req.body.productId
        const data = await Product.findOneAndDelete({name: id});
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




