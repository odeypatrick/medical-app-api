const Vital = require("../models/Vital");

exports.addVitals = async (req, res) => {
    let { temperature, height, bloodPressure, pulseRate, bmi, weight } = req.body;
  
    try {
        // Prevent any other users  apart from Nurses from accessing this resource
        if(req.user.role !== "Nurse"){
            return res.sendStatus(401)
        }

        // Validate fields
        if(!temperature || !height || !bloodPressure || !pulseRate || !bmi || !weight) {
            return res.status(403).json({ code: 200, message: "Enter all fields!" })
        }

        // Insert into table
        const vital  = await Vital.create({
            temperature,
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
        console.log(error)
        res.status(500).json({
            code: 500,
            message: "Something went wrong",
            error
        })
    }
}