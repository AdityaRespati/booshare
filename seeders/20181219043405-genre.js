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
   return queryInterface.bulkInsert('genres', [{
     genreName: 'action',
     createdAt: new Date,
     updatedAt: new Date
   }, 
   {
    genreName: 'romance',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    genreName: 'comedy',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    genreName: 'horror',
    createdAt: new Date,
    updatedAt: new Date
  }, {
    genreName: 'fantasy',
    createdAt: new Date,
    updatedAt: new Date
  }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('genres', null, {});
  }
};
