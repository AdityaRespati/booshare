'use strict';
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: DataTypes.STRING,
    authorName: DataTypes.STRING
  }, {});
  books.associate = function(models) {
    // associations can be defined here
  };
  return books;
};