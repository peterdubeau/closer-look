const mongoose = require('mongoose')
const productSchema = mongoose.Schema


const Product = new productSchema(
  {
    brandName: { type: String, required: true },
    info: { type: String, required: true },
    imgURL: { type: String, required: true },
    people: { type: Boolean, required: true },
    planet: { type: Boolean, required: true },
    animals: { type: Boolean, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('product', Product)