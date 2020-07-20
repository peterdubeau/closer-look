const { Router } = require('express')
const controllers = require('../controllers/product')

const router = Router()

router.get('/products/', controllers.getProducts)
router.post('/products/', controllers.createProduct)
router.get('/products/:id', controllers.getProduct)
router.put('/products/:id', controllers.updateProduct)
router.delete('/products/:id', controllers.deleteProduct)


module.exports = router