'use strict';
const encrypt = require('../helpers/encrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    secret: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (value) => {
        let generate = encrypt(value.password);
        value.password = generate.hash;
        value.secret = generate.secret;
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};