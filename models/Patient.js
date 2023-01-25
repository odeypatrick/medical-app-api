const Sequelize = require('sequelize');
const db = require('../config/database');

const Patient = db.define('user', {
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  phone: {
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