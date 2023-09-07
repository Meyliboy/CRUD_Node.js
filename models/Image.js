const { default: mongoose } = require("mongoose");

const ImageSchema = mongoose.Schema({
  image: {
    type: String,
  },
});

module.exports = ImageModel = mongoose.model("imageModel", ImageSchema);
