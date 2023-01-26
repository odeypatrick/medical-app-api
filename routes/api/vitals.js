const router = require('express').Router()
const { addVitals } = require('../../controllers/vitals')
const { isAuthenticated } = require('../../controllers/users')

router.post('/patient/:id/vitals', isAuthenticated, addVitals) // add new patient vitals route

module.exports = router;