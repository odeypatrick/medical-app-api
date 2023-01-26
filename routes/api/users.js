const router = require('express').Router()
const { createUser, loginUser, getUserInfo } = require('../../controllers/users')
const { isAuthenticated } = require('../../controllers/users')

router.post('/user/register', createUser) // register
router.post('/user/login', loginUser) // login
router.get('/user/info', isAuthenticated, getUserInfo) // get information

module.exports = router;