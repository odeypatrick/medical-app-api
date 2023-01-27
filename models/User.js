const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  department: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM("Clerk", "Nurse"),
    allowNull: false
  }
});

User.sync().then(() => {
  console.log('table created');
});
module.exports = User;