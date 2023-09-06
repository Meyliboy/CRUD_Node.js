const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  login: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
  picture: {
    type: String,
  },
});

module.exports = mongoose.model("users", schema);
