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
        updatedAt: new Date,
        url:  'https://www.bookrix.com/book.html?bookID=cb.cooper_1279837078.7475359440#0,558,84906'
      }, 
      {
        title: "The Shape of Water",
        authorName: "Guillermo del Toro",
        GenreId: 6,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.simonandschuster.com/books/Guillermo-del-Toros-The-Shape-of-Water/Gina-McIntyre/9781683832256'
      }, 
      {
        title: "The Hunger Games",
        authorName: "Suzanne Collins",
        GenreId: 7,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.scholastic.com/thehungergames/media/TheHungerGamesExcerpt_Ch1-2.pdf'
      }, 
      {
        title: "Catching Fire",
        authorName: "Suzanne Collins",
        GenreId: 9,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.anderson5.net/cms/lib02/SC01001931/Centricity/Domain/222/Catching%20Fire.pdf'
      },
      {
        title: "Insurgent",
        authorName: "Veronica Roth",
        GenreId: 8,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.readingstudios.com/uploads/5/2/4/6/52467441/insurgent2.pdf'
      },
      {
        title: "Divergent",
        authorName: "Veronica Roth",
        GenreId: 8,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.tyrone.k12.pa.us/site/handlers/filedownload.ashx?moduleinstanceid=2789&dataid=3192&FileName=Divergent.pdf'
      },
      {
        title: "Just the Funny Parts",
        authorName: "Nell Scovell",
        GenreId: 9,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.harpercollins.com/9780062473509/just-the-funny-parts/'
      },
      {
        title: "Will Not Attend",
        authorName: "Adam Resnick ",
        GenreId: 10,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.kobo.com/us/en/ebook/will-not-attend'
      },
      {
        title: "Never Be Alone",
        authorName: "Paige Dearth",
        GenreId: 6,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'http://www.ebooksoda.com/ebook-deals/never-be-alone-by-paige-dearth'
      },
      {
        title: "Elevation",
        authorName: "Stephen King",
        GenreId: 8,
        createdAt: new Date,
        updatedAt: new Date,
        url: 'https://www.simonandschuster.com/books/Elevation/Stephen-King/9781982102333'
      }
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
