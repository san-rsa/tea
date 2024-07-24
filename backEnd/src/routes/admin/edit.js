require('dotenv').config()
const Product = require('../../models/product')
const Category = require('../../models/category')
const Banner = require('../../models/banner')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const OTP = require('../../models/OTP')
const otpGenerator = require("otp-generator");
const User = require('../../models/user')
// const Product = require('../models/product')
// const Auth = require('../middleware/mid')




    router.patch('/banner/:id' ,async (req, res, next) => {
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


    router.patch('/cart/:id' ,async (req, res, next) => {
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


    router.patch('/category/:id' ,async (req, res, next) => {
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


    router.patch('/order/:id' ,async (req, res, next) => {
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


    router.patch('/product/:id' ,async (req, res, next) => {
        try {

            const data = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.json(data);
            console.log(data, " updated successfully!");
        } catch (error) {
            return next(error);
        }
    });


    router.patch('/user/:id' ,async (req, res, next) => {
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


    // router.patch('/banner/:id' ,async (req, res, next) => {
    //     try {

    //         const data = await Banner.findByIdAndUpdate(req.params.id, {
    //             $set: req.body,
    //         }, { new: true });
    //         res.json(data);
    //         console.log(data, req.body, "user updated successfully!");
    //     } catch (error) {
    //         return next(error);
    //     }
    // });




module.exports = router;