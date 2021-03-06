const { Router } = require('express')
const controllers = require('../controllers/user')

const router = Router()

router.get('/users', controllers.getUsers)
router.get('/users/:id', controllers.getUser)
router.post('/users', controllers.createUser)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)
router.post('/userByEmail', controllers.getUserByEmail)

module.exports = router