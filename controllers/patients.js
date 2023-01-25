const Patient = require("../models/Patient");
const Vital = require('../models/Vital')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Add new patient to dB
exports.createNewPatient = (req, res) => {
    let { firstName, lastName, middleName, gender, dob, phoneNumber } = req.body;
  
      // Insert into table
      Patient.create({
        firstName,
        lastName,
        middleName,
        gender,
        dob,
        phoneNumber
      })
    .then(patient => {
        res.json({
            code: 200,
            message: "Operation successful",
            data: patient
        })
    })
    .catch(err => console.log(err))
}

// Get all patients
exports.getAllPatients = (req, res) => {
    Patient.findAll()
    .then(patients => {
        res.json({
            code: 200,
            message: "Operation successful",
            data: patients
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}

// Get a patient's details
exports.getPatientDetails = (req, res) => {

}

// search patients
exports.searchPatients = (req, res) => {

}



