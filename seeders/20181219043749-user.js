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
   return queryInterface.bulkInsert('users', [{
    username: 'Aditya',
    email: 'dityo.hario@gmail.com',
    password: "aditya12345",
    createdAt: new Date,
    updatedAt: new Date
  }, 
  {
    username: 'Theresia',
    email: 'theresiacoa@gmail.com',
    password: "there2018",
    createdAt: new Date,
    updatedAt: new Date
  } ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('users', null, {});
  }
};
