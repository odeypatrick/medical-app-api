const Vital = require("../models/Vital");

exports.addVitals = async (req, res) => {
    let { date, temperature, height, bloodPressure, pulseRate, bmi, weight } = req.body;
  
    try {
        // Prevent any other users  apart from Nurses from accessing this resource
        if(req.user.role !== "Nurse"){
            return res.sendStatus(401)
        }

        // Insert into table
        const vital  = await Vital.create({
            temperature,
            date,
            patientId: req.params.id,
            height,
            weight,
            bloodPressure,
            pulseRate,
            bmi
        })
        res.json({
            code: 201,
            message: "Operation successful",
            data: vital
        })
    }
    catch(error){
        res.status(500).json({
            code: 500,
            message: "Operation successful",
            error
        })
    }
}

exports.deleteVital = () => {

}