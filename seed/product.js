const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products = 
      [
        {
          brandName: "Nike",
          info: "Blah Blah Blah Blah Blah",
          imgURL: "Test URL",
          people: true,
          planet: false,
          animals: false
        }
      ]
  
      await Product.insertMany(products)
      console.log("Created products!")
  }
  const run = async () => {
      await main()
      db.close()
  }
  
  run()