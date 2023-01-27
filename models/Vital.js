const Sequelize = require('sequelize');
const db = require('../config/db');

const Patient = db.define('vitals', {
  temperature: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  height: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bloodPressure: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pulseRate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bmi: {
    type: Sequelize.STRING,
    allowNull: false
  },
  patientId: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Patient.sync().then(() => {
  console.log('table created');
});

module.exports = Patient;