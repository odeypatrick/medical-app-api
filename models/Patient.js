const Sequelize = require('sequelize');
const db = require('../config/db');

const Patient = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  middleName: {
    type: Sequelize.STRING
  },
  dob: {
    type: Sequelize.DATE
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  paymentCategory: {
    type: Sequelize.STRING
  },
});

Patient.sync().then(() => {
  console.log('table created');
});

module.exports = Patient;