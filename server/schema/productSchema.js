const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    imgUrl: String,
    name: String,
    price: Number
  });

  module.exports = mongoose.model('product',productSchema)