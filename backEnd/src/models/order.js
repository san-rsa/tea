const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({

    userId : {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },

    products: [{
        productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true
        },

        name: {type: String,
          },

        quantity: {type: Number, required: true, min: 1, default: 1
        },

        price: {type: Number, default: 0,
        },
  
        productCode: {type: String,
          },

    }],

    cart: {
        totalQty: {type: Number, default: 0, required: true,
        },

        totalCost: {type: Number, default: 0, required: true,
        },
      },

      address: {type: String, required: true,
      },

      paymentId: {type: String, required: true,
      },

      createdAt: {type: Date, default: Date.now,
      },

      Delivered: {type: Boolean, default: false,
      },
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order