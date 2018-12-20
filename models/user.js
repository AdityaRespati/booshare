'use strict';
const encrypt = require('../helpers/encrypt');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function (value, next) {
          user.findOne({
            where: {email: value,
            id: {[Op.ne]: this.id}
          }
          })
          .then(data => {
            if(data) {
              next(`email already in use`)
            } else {
              next()
            }
          })
          .catch(err => {
            next(err)
          })
        }
      }
    },
    password: DataTypes.STRING,
    secret: DataTypes.STRING
  }, 
  {
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