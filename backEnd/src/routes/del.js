const express = require("express");
const router = new express.Router();
const Cart = require("../models/cart");
const Wishlist = require("../models/wishlist");
const Product = require("../models/product");
const {auth} = require("../middleware/mid");





router.delete("/cart", auth, async (req, res) => {
    const userId = req.userId
    const productId = req.body.productId

    // {
    //     "$pull": {
    //       "columns": {
    //         "some_id": "some_id"
    //       }
    //     }
    //   }



    // User.findOne({id:12346}, function (err, User) {
    //     if (err) {
    //         return;
    //     }
    //     User.remove(function (err) {
    //         // if no error, your model is removed
    //     });
    // });



    // User.findOneAndUpdate({ _id: "12346" }, { $pull: { event: { _id: "12346" } } }, { new: true });



    try {
        const cart = await Cart.findOneAndUpdate( {userId: userId}, {$pull: {products: {sizeId: productId}}});

       // const cart = await Cart.findOne({ userId });

        //cart.products.pull({sizeId: productId})
  
        return res.send(cart)

       // let productDetailss = await productById(productId);
    

 



        //      if (!productDetails) {
        //     return res.status(500).json({
        //         type: "Not Found",
        //         msg: "Invalid request"
        //     })
        // }
        // //--If Cart Exists ----
        // console.log(  user, productId, productDetails, cart, )


        // if (cart) {
        //     //---- Check if index exists ----
        //     const indexFounds = cart.products.findIndex(item => item.productId == );
           // const indexFound = cart.products.findIndex(item => item.sizeId == productId);



        //     //------This removes an item from the the cart if the quantity is set to zero, We can use this method to remove an item from the list  -------
        //     if (indexFound !== -1 && quantity <= 0) {
        //         cart.products.splice(indexFound, 1);
        //         if (cart.products.length == 0) {
        //             cart.subTotal = 0;
        //         } else {
        //             cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        //         }
        //     }
        //     //----------Check if product exist, just add the previous quantity with the new quantity and update the total price-------
        //     else if (indexFound !== -1) {
        //         cart.products[indexFound].quantity = cart.products[indexFound].quantity + quantity;
        //         cart.products[indexFound].total = cart.products[indexFound].quantity * productDetails.size[price].price;
        //         cart.products[indexFound].price = productDetails.size[price].price
        //         cart.products[indexFound].weight = productDetails.size[price].weight

        //         cart.totalCost = cart.products.map(item => item.total).reduce((acc, next) => acc + next);
        //     }
        //     //----Check if quantity is greater than 0 then add item to items array ----
        //     else if (quantity > 0) {
        //         cart.products.push({
        //             productId: productId,
        //             sizeId: size,
        //             name : productDetails.name,
        //             quantity: quantity,
        //             price: productDetails.size[price].price,
        //             weight: productDetails.size[price].weight,
        //             total: parseInt(productDetails.size[price].price * quantity)
        //         })
        //         cart.totalCost = cart.products.map(item => item.total).reduce((acc, next) => acc + next);
        //     }
        //     //----If quantity of price is 0 throw the error -------
        //     else {
        //         return res.status(400).json({
        //             type: "Invalid",
        //             msg: "Invalid request"
        //         })
        //     }
        //     const data = await cart.save();
        //     res.status(200).json({
        //         type: "success",
        //         mgs: "Process successful",
        //         data: data
        //     })
        // }
        // //------------ This creates a new cart and then adds the item to the cart that has been created------------
        // else {


        //     const newCart = await Cart.create({
        //         userId: user,
        //         products: [{
        //             name: productDetails.name,
        //             productId: productId,
        //             sizeId: size,
        //             quantity,
        //             total: parseInt(productDetails.size[price].price * quantity),
        //             price:  productDetails.size[price].price,
        //             weight:  productDetails.size[price].weight

        //         }],
        //         totalCost:  parseInt(productDetails.size[price].price * quantity)
        //       });
        
        
        //       return res.status(201).send(newCart);
            
        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
});







router.post("/addcart", auth, async (req, res) => {
    const user = req.userId
    const productId = req.body.productId
    const quantity = Number.parseInt(req.body.quantity );
    const size = Number(req.body.weight)

    if (!size <= !2 && !size >= 0) {
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
        console.log( user, productId, productDetails, cart, quantity)


        if (cart) {
            //---- Check if index exists ----
            const indexFound = cart.products.findIndex(item => item.productId == productId);


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
                cart.products[indexFound].total = cart.products[indexFound].quantity * productDetails.size[size].price;
                cart.products[indexFound].price = productDetails.size[size].price
                cart.totalCost = cart.products.map(item => item.total).reduce((acc, next) => acc + next);
            }
            //----Check if quantity is greater than 0 then add item to items array ----
            else if (quantity > 0) {
                cart.products.push({
                    productId: productId,
                    name : productDetails.name,

                    quantity: quantity,
                    price: productDetails.size[size].price,
                    weight: productDetails.size[size].weight,
                    total: parseInt(productDetails.size[size].price * quantity)
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
                    quantity,
                    total: parseInt(productDetails.size[size].price * quantity),
                    price:  productDetails.size[size].price
                }],
                totalCost:  parseInt(productDetails.size[size].price * quantity)
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























router.delete("/wishlist", auth, async (req, res) => {
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