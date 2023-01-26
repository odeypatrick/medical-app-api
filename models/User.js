const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
  userId: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  department: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  }
});

User.sync().then(() => {
  console.log('table created');
});
module.exports = User;