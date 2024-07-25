require('dotenv').config()
const Product = require('../models/product')
const Category = require('../models/category')
const Banner = require('../models/banner')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const OTP = require('../models/OTP')
const otpGenerator = require("otp-generator");
const User = require('../models/user')
// const Product = require('../models/product')
// const Auth = require('../middleware/mid')






// UPDATE Student
router.get('/banner/:id', async (req, res, next) => {

        try {
            const data = await Banner.findById(req.params.id)

            res.json(data);
        } catch (error) {
            return next(error);
        }
    })

    router.get('/cart/:id', async (req, res, next) => {
        try {
            const data = await User.findById(req.params.id)

            res.json(data);
        } catch (error) {
            return next(error);
        }
    })

    router.get('/cartegory/:id', async (req, res, next) => {
        try {
            const data = await Category.findById(req.params.id)

            res.json(data);
        } catch (error) {
            return next(error);
        }
    })

    router.get('/order/:id', async (req, res, next) => {
        try {
            const data = await User.findById(req.params.id)

            res.json(data);
        } catch (error) {
            return next(error);
        }
    })

    router.get('/product/:id', async (req, res, next) => {
        try {
            const data = await Product.findById(req.params.id)

            res.json(data);
        } catch (error) {
            return next(error);
        }
    })


    router.get('/user/:id', async (req, res, next) => {
        try {
            const data = await User.findById(req.params.id)
            res.json(data);
        } catch (error) {
            return next(error);
        }
    })


    






//     // Update Student Data
//     .put(async (req, res, next) => {
//         try {
//             const data = await Student.findByIdAndUpdate(req.params.id, {
//                 $set: req.body,
//             }, { new: true });
//             res.json(data);
//             console.log("Student updated successfully!");
//         } catch (error) {
//             return next(error);
//         }
//     });

// // DELETE Student
// router.delete('/delete-student/:id', async (req, res, next) => {
//     try {
//         const data = await Student.findByIdAndRemove(req.params.id);
//         res.status(200).json({
//             msg: data,
//         });
//     } catch (error) {
//         return next(error);
//     }
// });

module.exports = router;








module.exports = router;