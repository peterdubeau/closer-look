const db = require('../db/connection')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = 
      [
        {
          "firstName": "Beyonce",
          "lastName": "Knowles",
          "imgURL": "https://i.pinimg.com/originals/08/1e/8d/081e8df05d58af26f39ef168e9f3815b.jpg",
          "email": "Beyonce@gmail.com",
          "password": "ilovejayz"
        },
        {
          "firstName": "Shawn",
          "lastName": "Carter",
          "imgURL": "https://djbooth.net/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTUzNDg1OTE5MDE1MjgyNTQ1/jay-z-new-live-nation-dealjpg.jpg",
          "email": "Jayz@gmail.com",
          "password": "ilovebeyonce"
        }
      ]
  
      await User.insertMany(users)
      console.log("Created user!")
  }
  const run = async () => {
      await main()
      db.close()
  }
  
  run()