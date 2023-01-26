const router = require('express').Router()
const { createNewPatient, getAllPatients, getPatientDetails } = require('../../controllers/patients')
const { isAuthenticated } = require('../../controllers/users')

router.post('/patient', isAuthenticated, createNewPatient) // add new patient route
router.get('/patients', getAllPatients) // get all patients route
router.get('/patient/:id', isAuthenticated, getPatientDetails) // get patient details route

module.exports = router;