const express = require('express')
const router = express.Router()
const Model = require('../models')
const session = require('express-session')

const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
router.use(express.static('upload'));

router.get('/upload', (req, res) => {
  res.render('upload.ejs')
})
router.post('/upload', upload.single('uploadedFile'), (req, res) => {
  // res.redirect('/');
  console.log(req.file)
});

//SHOW ALL BOOKS DATA
router.get('/',function(req, res) {
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
})

//SEARCH BY GENRE
router.get('/searchQuery', (req, res) => {
  let err = req.query.error
  res.render('searchByGenre.ejs', {
    data: null,
    err: err || null
  });
})

router.post('/searchQuery', (req, res) => {
  Model.genre.findOne({
    include: [Model.books],
    where: { genreName: req.body.search}
  })
    .then(data => {
      let err = req.query.error
      if (!data) {
        throw `tidak ada genrenya`
      } else {
        res.render('searchByGenre.ejs', {
          data: data,
          err: err || null
        });
        // res.redirect('/book/searchQuery', data)
      }
    })
    .catch(err => {
      res.redirect(`/book/searchQuery/?error=${err}`);
    })
})

//READ NOW
router.get('/readNow/:BookId', function(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/user/login')
  }
}, function (req, res) {
  let obj ={
    UserId: req.session.user.id,
    BookId: req.params.BookId
  }
  Model.userbook
  .create(obj)
  .then(data =>{
    res.send('baca buku')
  })
  .catch(err =>{
    res.send(err)
  })
})

//MY BOOK LIST
router.get('/mybooks', 
function(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/user/login')
  }
}, 
function (req, res) {
  Model.user.findOne({
    where: {id: req.session.user.id},
    include: { model: Model.books},
   })
    .then(data =>{
      res.render("myBook.ejs", {data: data});
    })
    .catch(err => {
      res.send(err, "errrr")
    })
})



module.exports = router