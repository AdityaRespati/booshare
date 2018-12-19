'use strict';
module.exports = (sequelize, DataTypes) => {
  const userbook = sequelize.define('userbook', {
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {});
  userbook.associate = function(models) {
    // associations can be defined here
  };
  return userbook;
};