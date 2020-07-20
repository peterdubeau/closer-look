const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products =
        [
        {
            "brandName": "New Balance",
            "info": "Every day Trainer Shoes",
            "imgURL": "https://nb.scene7.com/is/image/NB/wx624wt2_nb_02_i?$pdpflexf2$&fmt=webp",
            "people": true,
            "planet": true,
            "animals": false
          },
        {
          "brandName": "Nike",
          "info": "Air Jordan 1 Retro High",
          "imgURL": "https://cdn-images.farfetch-contents.com/13/15/75/38/13157538_14718351_480.jpg",
          "people": false,
          "planet": false,
          "animals": false
        },
        {
          "brandName": "Adidas",
          "info": "Running Shoes",
          "imgURL": "https://static.highsnobiety.com/thumbor/TUSIsGnzcwjyKQAY6_2u60nzz8g=/fit-in/480x320/smart/static.highsnobiety.com/wp-content/uploads/2020/02/20104927/adidas-nmd-memorial-day-main.jpg",
          "people": false,
          "planet": true,
          "animals": false
        },
        {
          "brandName": "Reebok",
          "info": "Bolton Sneakers",
          "imgURL": "https://cdn-images.italist.com/image/upload/t_medium_dpr_2_q_auto/2814cbf58e032bdd8c243f25c3d5d442.jpg",
          "people": false,
          "planet": false,
          "animals": true
        },
        {
          "brandName": "Aldo",
          "info": "Fashion Sneaker",
          "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBRjn08EXK_yPIys2nBWVX-uEdlheIWKuopg&usqp=CAU",
          "people": true,
          "planet": true,
          "animals": true
        },
        {
            "brandName": "Aldo",
            "info": "UMIASSA-70 Sneakers",
            "imgURL": "https://d1j36w0bax18n0.cloudfront.net/media/catalog/product/h/t/httpss3-ap-southeast-1.amazonaws.compim-prod-product-imagesbc99bc99ca55675327e9df7c18089e1eb2c5566357df_f2210661d13e45f58d133235049d528fdummy.jpg",
            "people": true,
            "planet": true,
            "animals": true
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