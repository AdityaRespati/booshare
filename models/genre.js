'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    genreName: DataTypes.STRING
  }, {});

  genre.associate = function(models) {
    genre.hasMany(models.books, {
      foreignKey: "GenreId"
    })
  };
  return genre;
};