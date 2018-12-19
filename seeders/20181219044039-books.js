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
        title: "The Hunger Games",
        authorName: "Suzanne Collins",
        createdAt: new Date,
        updatedAt: new Date
      }, 
      {
        title: "Catching Fire",
        authorName: "Suzanne Collins",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Insurgent",
        authorName: "Veronica Roth",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Divergent",
        authorName: "Veronica Roth",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Just the Funny Parts",
        authorName: "Nell Scovell",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Will Not Attend",
        authorName: "Adam Resnick ",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Never Be Alone",
        authorName: "Paige Dearth",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Elevation",
        authorName: "Stephen King",
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
