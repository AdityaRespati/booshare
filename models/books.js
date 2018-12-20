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

    books.belongsToMany(models.user, {through: models.userbook, foreignKey: 'BookId' })

  };

  books.findBooks = function(genreId) {
    books.findAll({
      where: {GenreId: genreId}
    })
    .then(data => {
      return data
    })
    .catch(err => {
      res.send(err)
    })
  }


  return books;
};