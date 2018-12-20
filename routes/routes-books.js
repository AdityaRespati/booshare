const express = require('express')
const router = express.Router()
const Model = require('../models')
const session = require('express-session')

//SHOW ALL BOOKS DATA
router.get('/', function (req, res, next) {
  if (req.session.user.id !== null) {
    let data = null
    Model.books.findAll({
      include: [Model.genre]
    })
      .then(data => {
        res.render('allBooks.ejs', {
          data: data
        })
      })
      .catch(err => {
        console.log(err, 'masuk kesini dia')
        res.send(err);
      })
  } else {
    next()
  }
}, function (req, res, next) {
  res.redirect('/register')
})

//SEARCH
router.post('/:id/searchQuery', (req, res) => {
  Model.genre.findAll({
    include: [Model.books],
    where: { genreName: req.body.search }
  })
    .then(data => {
      // res.render('search.ejs', {
      //   data: data
      // });
      if (!data) {
        throw `tidak ada genrenya`
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.redirect(`/book/:id/searchQuery?error=${err}`);
    })
})

router.get('/:id', (req, res) => {
  let data = null
  Model.books.findAll({
    include: [Model.genre]
  })
    .then(dataBooks => {
      // res.render('allBooks.ejs', {
      //   data: data
      // })
      // res.send(data)
      data = dataBooks
      return Model.user.findAll()
    })
    .then(dataUser => {
      res.render('allBooks.ejs', {
        data: data,
        dataUser: dataUser
      })
      // res.send(dataUser)     
    })
    .catch(err => {
      console.log(err, 'masuk kesini dia')
      res.send(err);
    })
})

// router.post('/:id', (req, res) =>{
//   let recc

//   Model.userbook
//   .create()
// })


router.get('/admin', (req, res) => {
  Model.Books.update()
})





module.exports = router