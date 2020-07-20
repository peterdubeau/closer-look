const mongoose = require('mongoose')
const productSchema = mongoose.Schema


const Product = new productSchema(
  {
    brandName: { type: String, required: true },
    info: { type: String, required: true },
    imgURL: { type: String, required: true },
    people: { type: boolean, required: true },
    planet: { type: boolean, required: true },
    animals: { type: boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('product', Product)