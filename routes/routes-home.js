const express = require('express')
const router = express.Router()
const Model = require('../models')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const uploadMulter = multer().single('book')

router.use(express.static('upload'))

router.get('/', function (req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/user/login')
  }
}, 
function (req, res) {
  let genreName = null
  Model.user.findOne({
    where: { id: req.session.user.id },
    include: [Model.books]
  })
    .then(data => {
      let specGenre = data.books;

      // res.send(data)
      if(data.books[0] == undefined){
        res.redirect('/book')
      }
      return Model.genre.findAll({
        where: { id: specGenre[0].GenreId }
      })
    })
    .then(genre => {
      genreName = genre[0].genreName

      return Model.books.findAll({
        where: { GenreId: genre[0].id }
      })
    })
    .then(recom => {
      res.render('home.ejs', { books: recom, genreName: genreName })
    })
    .catch(err => {
      res.send(err);
    })
})


router.post('/:id', (req, res) => {
  let readinglist = {
    UserId: req.params.id
  }

  Model.userbook
    .create()
})

router.get('/addBook', (req, res) => {
  Model.genre
    .findAll()
    .then(dataGenre => {
      res.render('addBook.ejs', { dataGenre })
      // res.send(dataGenre)
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/addBook',
  (req, res, next) => {
    if (req.session.user) {
      next()
    } else {
      res.redirect('/users/login')
    }
  },
  (req, res) => {
    let objBooks = {
      title: req.body.title,
      authorName: req.body.authorName,
      GenreId: req.body.GenreId,
      // file: req.file.book,
    }
    // console.log(req.file.book);

    // res.send(objBooks)
    // console.log(req.file)

    Model.books
      .create(objBooks)
      .then(() => {
        res.redirect('/book')
      })
      .catch(err => {
        res.send(err)
        console.log(err);
      })
  })

//REGISTER
// app.get('/home/addBook/:bookId', middleware, res.red)
//   res.redirect('/home/req.session.user.id')

module.exports = router