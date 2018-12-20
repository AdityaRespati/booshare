const express = require('express')
const router = express.Router()
const Model = require('../models')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const uploadMulter = multer().single('book')

router.use(express.static('upload'))

router.get('/', (req, res) =>{
  res.redirect('/landingPage.ejs')
})

router.get('/:id', function (req, res, next) {
  if (req.session.user.id !== null) {
    // console.log(req.session.user)
    Model.user
      .findOne({
        where:
          { id: req.params.id }
      })
      .then(dataUser => {
        res.render('home.ejs', { dataUser })
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      })
  } else{next()}
},function (req, res, next){
  res.send("you have to login first")
})


router.post('/:id', (req, res) => {
  let readinglist = {
    UserId: req.params.id
  }

  Model.userbook
    .create()
})

router.get('/:id/addBook',  (req, res) => {
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

router.post('/:id/addBook', upload.single('book'), 
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
  console.log(req.file.book);
  
  // // res.send(objBooks)
  console.log(req.file)

  Model.books
    .create(objBooks)
    .then(dataBook => {
      res.redirect('/books')
      // res.send(req.file)
      // console.log(req.file)
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