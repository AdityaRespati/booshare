'use strict';
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: DataTypes.STRING,
    authorName: DataTypes.STRING,
    GenreId: DataTypes.INTEGER
  }, {});
  books.associate = function(models) {
    books.belongsTo(models.genre, {
      foreignKey: "GenreId"
    });
  };
  return books;
};