'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    genreName: DataTypes.STRING
  }, {});
  genre.associate = function(models) {
    // associations can be defined here
  };
  return genre;
};