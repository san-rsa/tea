const express = require("express");
const router = new express.Router();
const Cart = require("../models/cart");
const Wishlist = require("../models/wishlist");
const Product = require("../models/product");
const {auth} = require("../middleware/mid")





router.post("/cart", auth, async (req, res) => {
    const user = req.userId
    const productId = req.body.productId
    const quantity = Number.parseInt(req.body.quantity );
    const size = req.body.weight
    const price = Number(req.body.price)

    if (!price <= !2 && !price >= !0) {
        return res.status(500).json({
            type: "Not Found",
            msg: "choose right weight"
        })
    }

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
        console.log( size, user, productId, productDetails, cart, quantity)


        if (cart) {
            //---- Check if index exists ----
            const indexFounds = cart.products.findIndex(item => item.productId == productId);
            const indexFound = cart.products.findIndex(item => item.sizeId == size);



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
                cart.products[indexFound].total = cart.products[indexFound].quantity * productDetails.size[price].price;
                cart.products[indexFound].price = productDetails.size[price].price
                cart.products[indexFound].weight = productDetails.size[price].weight

                cart.totalCost = cart.products.map(item => item.total).reduce((acc, next) => acc + next);
            }
            //----Check if quantity is greater than 0 then add item to items array ----
            else if (quantity > 0) {
                cart.products.push({
                    productId: productId,
                    sizeId: size,
                    name : productDetails.name,
                    quantity: quantity,
                    price: productDetails.size[price].price,
                    weight: productDetails.size[price].weight,
                    total: parseInt(productDetails.size[price].price * quantity)
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
                    name: productDetails.name,
                    productId: productId,
                    sizeId: size,
                    quantity,
                    total: parseInt(productDetails.size[price].price * quantity),
                    price:  productDetails.size[price].price,
                    weight:  productDetails.size[price].weight

                }],
                totalCost:  parseInt(productDetails.size[price].price * quantity)
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





























router.post("/wishlist", auth, async (req, res) => {
    const user = req.userId
    const productId = req.body.productId

    try {
        const wishlist = await Wishlist.findOne({ userId: user });
       // let productDetailss = await productById(productId);
        const productDetails = await Product.findOne({ _id: productId });

             if (!productDetails) {
            return res.status(500).json({
                type: "Not Found",
                msg: "Invalid request"
            })
        }
        //--If Cart Exists ----


        if (wishlist) {
            //---- Check if index exists ----
            const indexFound = wishlist.products.findIndex(item => item.productId == productId);

        console.log( user, productId, wishlist, "2222" , indexFound, productDetails.name )


            //----Check if quantity is greater than 0 then add item to items array ----
            if (indexFound == -1 ) {
                wishlist.products.push({
                    productId: productId,
                    name : productDetails.name,
                })
            }
            //----If quantity of price is 0 throw the error -------
            else {
                return res.status(400).json({
                type: "product added",
                msg: "you have this product in your list"
                })
            }
            const data = await wishlist.save();
            res.status(200).json({
                type: "success",
                mgs: "Process successful",
                data: data
            })
        }
        //------------ This creates a new cart and then adds the item to the cart that has been created------------
        else {


            const newW = await Wishlist.create({
                userId: user,
                products: [{
                    name: productDetails.name,
                    productId: productId,
                }],
               
              });
        
        
              return res.status(201).send(newW);
            
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