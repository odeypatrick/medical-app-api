const Sequelize = require('sequelize');
const db = require('../config/db');

const Patient = db.define('user', {
  date: {
    type: Sequelize.STRING
  },
  temperature: {
    type: Sequelize.STRING
  },
  height: {
    type: Sequelize.STRING
  },
  bloodPressure: {
    type: Sequelize.STRING
  },
  pulseRate: {
    type: Sequelize.STRING
  },
  bmi: {
    type: Sequelize.STRING
  },
  patientId: {
    type: Sequelize.STRING
  }
});

Patient.sync().then(() => {
  console.log('table created');
});

module.exports = Patient;