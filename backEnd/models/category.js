const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const categorySchema = new mongoose.Schema({
  title: {type: String, required: true
  },

  slug: {type: String, unique: true, slug: "title"
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category