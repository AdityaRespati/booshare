'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('books', [
      {
        title: "The Daughter",
        authorName: "C.B. Cooper",
        GenreId: 6,
        createdAt: new Date,
        updatedAt: new Date
      }, 
      {
        title: "The Shape of Water",
        authorName: "Guillermo del Toro",
        GenreId: 6,
        createdAt: new Date,
        updatedAt: new Date
      }, 
      {
        title: "The Hunger Games",
        authorName: "Suzanne Collins",
        GenreId: 7,
        createdAt: new Date,
        updatedAt: new Date
      }, 
      {
        title: "Catching Fire",
        authorName: "Suzanne Collins",
        GenreId: 9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Insurgent",
        authorName: "Veronica Roth",
        GenreId: 8,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Divergent",
        authorName: "Veronica Roth",
        GenreId: 8,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Just the Funny Parts",
        authorName: "Nell Scovell",
        GenreId: 9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Will Not Attend",
        authorName: "Adam Resnick ",
        GenreId: 10,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Never Be Alone",
        authorName: "Paige Dearth",
        GenreId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Elevation",
        authorName: "Stephen King",
        GenreId: 8,
        createdAt: new Date,
        updatedAt: new Date
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('books', null, {});
  }
};
