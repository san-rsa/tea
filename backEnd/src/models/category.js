const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const categorySchema = new mongoose.Schema({
  name: {type: String, required: true
  },

  imgUrl: [{type: String, required: true, trim: true
  }],

  slug: {type: String, unique: true, slug: "name"
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category