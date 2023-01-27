const Sequelize = require('sequelize');
const db = require('../config/db');

const Patient = db.define('patient', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middleName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  patientId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  paymentCategory: {
    type: Sequelize.ENUM("Out of Pocket", "Reliance Health Insurance"),
    allowNull: false
  },
});

Patient.sync().then(() => {
  console.log('table created');
});

module.exports = Patient;