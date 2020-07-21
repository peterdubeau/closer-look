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
            "animals": false,
            "type": "sneakers"
          },
        {
          "brandName": "Nike",
          "info": "Air Jordan 1 Retro High",
          "imgURL": "https://cdn-images.farfetch-contents.com/13/15/75/38/13157538_14718351_480.jpg",
          "people": false,
          "planet": false,
          "animals": false,
          "type": "sneakers"
        },
        {
          "brandName": "Adidas",
          "info": "Running Shoes",
          "imgURL": "https://static.highsnobiety.com/thumbor/TUSIsGnzcwjyKQAY6_2u60nzz8g=/fit-in/480x320/smart/static.highsnobiety.com/wp-content/uploads/2020/02/20104927/adidas-nmd-memorial-day-main.jpg",
          "people": false,
          "planet": true,
          "animals": false,
          "type": "sneakers"
        },
        {
          "brandName": "Reebok",
          "info": "Bolton Sneakers",
          "imgURL": "https://cdn-images.italist.com/image/upload/t_medium_dpr_2_q_auto/2814cbf58e032bdd8c243f25c3d5d442.jpg",
          "people": false,
          "planet": false,
          "animals": true,
          "type": "sneakers"
        },
        {
          "brandName": "Aldo",
          "info": "Fashion Sneaker",
          "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBRjn08EXK_yPIys2nBWVX-uEdlheIWKuopg&usqp=CAU",
          "people": true,
          "planet": true,
          "animals": true,
          "type": "sneakers"
          
        },
        {
            "brandName": "Aldo",
            "info": "UMIASSA-70 Sneakers",
            "imgURL": "https://d1j36w0bax18n0.cloudfront.net/media/catalog/product/h/t/httpss3-ap-southeast-1.amazonaws.compim-prod-product-imagesbc99bc99ca55675327e9df7c18089e1eb2c5566357df_f2210661d13e45f58d133235049d528fdummy.jpg",
            "people": true,
            "planet": true,
          "animals": true,
          "type": "sneakers"
      },
      {
        "brandName": "Gucci",
        "info": "Mini Ophidia GG Shoulder Bag",
        "imgURL": "https://image.harrods.com/gucci-mini-ophidia-gg-shoulder-bag_15220045_26090227_2048.jpg",
        "people": true,
        "planet": true,
        "animals": false,
        "type": "bags"
      },
    {
      "brandName": "Prada",
      "info": "Embleme Crossbody Bag",
      "imgURL": "https://images.neimanmarcus.com/ca/3/product_assets/V/4/H/N/5/NMV4HN5_mz.jpg",
      "people": false,
      "planet": false,
      "animals": false,
      "type": "bags"
    },
    {
      "brandName": "Christian Dior",
      "info": "Saddle Bag",
      "imgURL": "https://www.handbagclinic.co.uk/images/saddle-bag-p1254-7065_zoom.jpg",
      "people": false,
      "planet": true,
      "animals": false,
      "type": "bags"
    },
    {
      "brandName": "Balenciaga",
      "info": "Ville Leather Top Handle Bag",
      "imgURL": "https://image.s5a.com/is/image/saks/0400099859630",
      "people": false,
      "planet": false,
      "animals": true,
      "type": "bags"
    },
    {
      "brandName": "Telfar",
      "info": "FasLogo Embossed Tote Bag",
      "imgURL": "https://si.wsj.net/public/resources/images/B3-DZ040_TELFAR_8SR_20190512192218.jpg",
      "people": true,
      "planet": true,
      "animals": true,
      "type": "bags"
    },
    {
        "brandName": "Telfar",
        "info": "Embossed Leather Look Cross Body Bag",
        "imgURL": "https://cdna.lystit.com/200/250/tr/photos/farfetch/d3a290aa/telfar-yellow-Embossed-logo-tote-bag.jpeg",
        "people": true,
        "planet": true,
      "animals": true,
      "type": "bags"
      },
      {
        "brandName": "Ed Hardy",
        "info": "Bulldoh Archive Shirt",
        "imgURL": "https://tiotee.com/wp-content/uploads/2020/06/redirect-1833-300x300.jpg",
        "people": false,
        "planet": false,
        "animals": false,
        "type": "tops"
      },
    {
      "brandName": "Bklynciaga",
      "info": "Reverse BB Logo Hoodie",
      "imgURL": "https://cdn.shopify.com/s/files/1/0074/2961/9776/products/Image_10-28-19_at_5.39_PM_b82d4187-e46a-4f2d-8deb-0011337cf4c2_960x.jpg?v=1575070078",
      "people": true,
      "planet": true,
      "animals": true,
      "type": "tops"
    },
    {
      "brandName": "Bklynciaga",
      "info": "Campaign Coach Jacket",
      "imgURL": "https://cdn.shopify.com/s/files/1/0074/2961/9776/products/Screen_Shot_2019-10-29_at_11.49.22_AM_77329acb-319d-465e-b246-4fd9bd178766_1024x.png?v=1575067752",
      "people": true,
      "planet": true,
      "animals": true,
      "type": "tops"
    },
    {
      "brandName": "Nike",
      "info": "VT-Shirt NSW Futura Icon",
      "imgURL": "https://thumblr.uniid.it/product/184401/802183c05c13.jpg",
      "people": false,
      "planet": false,
      "animals": true,
      "type": "tops"
    },
    {
      "brandName": "Tier",
      "info": "Pistachio Hoodie",
      "imgURL": "https://images.squarespace-cdn.com/content/v1/54d988d4e4b0fc865498644f/1590723840844-2TVTSAJ1M6B6JD1WI4KG/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/8A8BAB07-3C92-4CFE-BAA3-DFC58B7D7CF7?format=2500w",
      "people": true,
      "planet": true,
      "animals": true,
      "type": "top"
    },
    {
        "brandName": "Tier",
        "info": "Tier Super Senior Varsity Jacket",
        "imgURL": "https://static1.squarespace.com/static/54d988d4e4b0fc865498644f/5b3a816c562fa75b2b905908/5dd00be248fc02235974ccfc/1573915621171/8DBDF313-EDEE-4B60-879B-4EE76BF0A123?format=1500w",
        "people": true,
        "planet": true,
      "animals": true,
      "type": "tops"
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