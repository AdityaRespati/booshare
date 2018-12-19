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
   return queryInterface.bulkInsert('books', [{
    title: "The Daughter",
    authorName: "C.B. Cooper",
    createdAt: new Date,
    updatedAt: new Date
  }, {
    title: "The Shape of Water",
    authorName: "Guillermo del Toro",
    createdAt: new Date,
    updatedAt: new Date
  }], {});
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
