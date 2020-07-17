const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const userRoutes = require('./routes/users') // out until mongo is up and running
const db = require('./db/connection') // out for now.
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', userRoutes);  // Commented out until mongo is up and running

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))