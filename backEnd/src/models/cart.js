const mongoose = require('mongoose');
  

const cartSchema = new mongoose.Schema({

    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,
    },

    products: [{
        productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true
        },

        name: {type: String,
        },

        quantity: {type: Number, required: true, min: 1, default: 1
        },

        weight: {type: Number, min: 1, default: 1
        },
        price: {type: Number, default: 0,
        },

        total: {type: Number, default: 0,
        },

        productCode: {type: String,
        },
    }],

    // totalQty: {type: Number, default: 0, required: true,
    // },

    totalCost: {type: Number, default: 0, required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
      },
}, 
{
    timestamps: true
}

)

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
















