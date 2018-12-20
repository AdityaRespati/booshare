const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', (req, res) =>{
  res.redirect('/landingPage.ejs')
})

router.get('/:id', function (req, res, next) {
  if (req.session.user) {
   next() 
  } else {
    res.redirect('/user/login')
  }
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

router.get('/:id/addBook', (req, res) => {
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

router.post('/:id/addBook', (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/users/login')
  }
}, (req, res) => {
  let objBooks = {
    title: req.body.title,
    authorName: req.body.authorName,
    GenreId: req.body.GenreId
  }

  // res.send(objBooks)

  Model.books
    .create(objBooks)
    .then(dataBook => {
      res.redirect('/books')
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