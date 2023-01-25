const router = require('express').Router()
const db = require('../../config/db')
const { createNewPatient, getAllPatients, getPatientDetails } = require('../../controllers/patients')
const { isAuthenticated } = require('../../controllers/users')

router.post('/patient', isAuthenticated, createNewPatient) // add new patient route
router.get('/patients', isAuthenticated, getAllPatients) // get all patients route
router.post('/patient/:id', isAuthenticated, getPatientDetails) // get patient details route

module.exports = router;