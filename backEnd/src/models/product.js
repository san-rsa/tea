const mongoose = require('mongoose')
// const ObjectID = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({

    name: {type: String, required: true, trim: true
    },

    imgUrl: [{type: String, required: true, trim: true
    }],

    description: {type: String, required: true
     },

     categoryId: {type: mongoose.Schema.Types.ObjectId, ref: "Category", 
      },

    size: [{ weight: {type: Number, required: true
    },
            price: {type: Number, required: true
    }

}]
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
