const express = require("express");
const router = new express.Router();
const Cart = require("../models/cart");
const Wishlist = require("../models/wishlist");

const Product = require("../models/product");







router.post("/cart", async (req, res) => {
    const {  user } = req.body;
    const productId = req.body.itemId
    const quantity = Number.parseInt(req.body.quantity);
    console.log(quantity)
    try {
        const cart = await Cart.findOne({ userId: user });
       // let productDetailss = await productById(productId);
        const productDetails = await Product.findOne({ _id: productId });

             if (!productDetails) {
            return res.status(500).json({
                type: "Not Found",
                msg: "Invalid request"
            })
        }
        //--If Cart Exists ----
        if (cart) {
            //---- Check if index exists ----
            const indexFound = cart.products.findIndex(item => item.productId == productId);

            // const itemIndex = cart.products.findIndex((item) =>item,  item.productId == productId);


            //------This removes an item from the the cart if the quantity is set to zero, We can use this method to remove an item from the list  -------
            if (indexFound !== -1 && quantity <= 0) {
                cart.products.splice(indexFound, 1);
                if (cart.products.length == 0) {
                    cart.subTotal = 0;
                } else {
                    cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
                }
            }
            //----------Check if product exist, just add the previous quantity with the new quantity and update the total price-------
            else if (indexFound !== -1) {
                cart.products[indexFound].quantity = cart.products[indexFound].quantity + quantity;
                cart.products[indexFound].total = cart.products[indexFound].quantity * productDetails.size[0].price;
                cart.products[indexFound].price = productDetails.size[0].price
                cart.totalCost = cart.products.map(item => item.total).reduce((acc, next) => acc + next);
            }
            //----Check if quantity is greater than 0 then add item to items array ----
            else if (quantity > 0) {
                cart.products.push({
                    productId: productId,
                    quantity: quantity,
                    price: productDetails.size[0].price,
                    total: parseInt(productDetails.size[0].price * quantity)
                })
                cart.totalCost = cart.products.map(item => item.total).reduce((acc, next) => acc + next);
            }
            //----If quantity of price is 0 throw the error -------
            else {
                return res.status(400).json({
                    type: "Invalid",
                    msg: "Invalid request"
                })
            }
            const data = await cart.save();
            res.status(200).json({
                type: "success",
                mgs: "Process successful",
                data: data
            })
        }
        //------------ This creates a new cart and then adds the item to the cart that has been created------------
        else {


            const newCart = await Cart.create({
                userId: user,
                products: [{
                    productId: productId,
                    quantity,
                    total: parseInt(productDetails.size[0].price * quantity),
                    price:  productDetails.size[0].price
                }],
                totalCost:  parseInt(productDetails.size[0].price * quantity)
              });
        
        
              return res.status(201).send(newCart);
            
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
});













router.post("/wishlist", async (req, res) => {
    const {  user } = req.body;
    const productId = req.body.itemId
    try {
        const cart = await Cart.findOne({ userId: user });

        const productDetails = await Product.findOne({ _id: productId });

             if (!productDetails) {
            return res.status(500).json({
                type: "Not Found",
                msg: "Invalid request"
            })
        }
        //--If Cart Exists ----
        if (cart) {
            //---- Check if index exists ----
            const indexFound = Wishlist.products.findIndex(item => item.productId == productId);

            //----------Check if product exist, just add the previous quantity with the new quantity and update the total price-------
            if (indexFound !== -1) {
                return res.status(400).json({
                    type: "product added",
                    msg: "you have this product in your list"
                })
            }

        }
        //------------ This creates a new cart and then adds the item to the cart that has been created------------
        else {


            const neww = await Wishlist.create({
                userId: user,
                products: [{ productId: productId }],
              });
        
        
              return res.status(201).send(neww);
            
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
});






















module.exports = router;