const express = require("express");
const router = new express.Router();
const Cart = require("../models/cart");
const Wishlist = require("../models/wishlist");
const Product = require("../models/product");
const {auth} = require("../middleware/mid");
const Order = require("../models/order");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);











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




// router.post("/order-success", auth, async (req, res) => {
//     // if (!req.session.cart) {
//     //   return res.redirect("/shopping-cart");
//     // }


//     const user = req.userId

//     const cart = await Cart.findOne({userId: user})  //.populate({path: "products", populate: {path: "productId"}})

//   // Create a PaymentIntent with the order amount and currency

//   const paymentIntent = await stripe.paymentIntents.create({

//     customer_email: req.email,
//     // submit_type: 'pay',
//     // billing_address_collection: 'auto',
//     // shipping_address_collection: {
//     //   allowed_countries: ['IE', 'NG'],
//     // },

//     // mode: 'payment',

//     amount: cart.totalCost * 100, //calculateOrderAmount(data),

//     currency: "eur",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//         enabled: true,
//       },
    
//   },


  
// );


//     console.log(cart)

//   function order (err) {
//     if (err) {
//       console.log(err+44);
//       return res.redirect("/checkout");
//     }
//     const order = new Order({
//       userId: user,
      
//         totalCost: cart.totalCost,
//         products: cart.products,
    
//     //   address: req.body.address,
//       paymentId: paymentIntent.id,
//     });
//     order.save();
//     // req.session?.cart = null;
//          cart.save();
//           Cart.findByIdAndDelete(cart._id);

//   }

//    order()

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });


//   });






const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/checkout-order', auth, async (req, res) => {

    const user = req.userId

    const data = await Cart.findOne({userId: user})  //.populate({path: "products", populate: {path: "productId"}})


  const session = await stripe.checkout.sessions.create({
    customer_email: 'customer@example.com',
    submit_type: 'pay',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['IE', 'NG'],
    },
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: data.products.total,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});




router.post("/", auth, async (req, res) => {

    
    const user = req.userId

    const cart = await Cart.findOne({userId: user})  //.populate({path: "products", populate: {path: "productId"}})

  // Create a PaymentIntent with the order amount and currency

  const paymentIntent = await stripe.paymentIntents.create({

    customer_email: req.email,
    // submit_type: 'pay',
    // billing_address_collection: 'auto',
    // shipping_address_collection: {
    //   allowed_countries: ['IE', 'NG'],
    // },

    // mode: 'payment',

    amount: cart.totalCost * 100, //calculateOrderAmount(data),

    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
        enabled: true,
      },
    
  },


  
);


    console.log(cart)




  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});



















// This is your test secret API key.
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
const endpointSecret = 'whsec_4ab892302ab6ec4892387cc1022520047132237e528a41829b78d9a521aa17be'// ||   process.env.STRIPE_ENDPOINT;


router.post('/webhooks', express.raw({type: 'application/json'}), (request, response) => {
  let event = request.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});













router.post('/webhook',  express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];


  let event;
  if (endpointSecret) {
    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
        response.status(400).send(`⚠️  Webhook signature verification failed: ${err.message}`);
        console.log(`⚠️  Webhook signature verification failed.`, err.message);

        return;
    }



    
    if (event.type === 'checkout.session.completed') {
        async function order (err) {  
            
           const cart = await Cart.findOne({userId: user})  //.populate({path: "products", populate: {path: "productId"}})
           const order = await Order.findOne({userId: user})  //.populate({path: "products", populate: {path: "productId"}})

          if (err) {
            console.log(err+44);
            return res.redirect("/checkout");
          }
          
          const orders = new Order({
            userId: user,
            
              totalCost: cart.totalCost,
              products: cart.products,
          
          //   address: req.body.address,
            paymentId:  event.data.object.id,
            paymentStatus: event.data.object.payment_status,

          });
          orders.save();
          // req.session?.cart = null;
                          Cart.findByIdAndDelete(cart._id);

               cart.save();
      
        }

        console.log(event)
      
         order()
   
            }

  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;

    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'checkout.session.expired':
      const checkoutSessionExpired = event.data.object;
      // Then define and call a function to handle the event checkout.session.expired
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});




module.exports = router;