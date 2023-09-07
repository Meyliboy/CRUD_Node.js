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
    required: true,
    type: String,
    min: 8,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});

module.exports = mongoose.model("users", schema);
