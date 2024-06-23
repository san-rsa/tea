const mongoose = require("mongoose");


const bannerSchema = new mongoose.Schema({
  text: {type: String, required: true
  },

  imgUrl: {type: String, required: true
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner