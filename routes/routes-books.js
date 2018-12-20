const express = require('express')
const router = express.Router()
const Model = require('../models')
const session = require('express-session')
const multer = require('multer');
//save books in uploads directory
const upload = multer({ dest: 'uploads/' })

//MULTER
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });
// var upload = multer({storage: storage});
router.get('/upload', (req, res) => {
  res.render('upload.ejs')
})
router.post('/upload', upload.single('uploadedFile'), (req, res) => {
  // res.redirect('/');
  res.send(req.body.uploadedFile)
});



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

//SEARCH BY GENRE
router.post('/:id/searchQuery', (req, res) => {
  Model.genre.findOne({
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
        res.render('searchByGenre.ejs', {
          data: data,
        });
      }
    })
    .catch(err => {
      res.redirect(`/book/:id/searchQuery?error=${err}`);
    })
})


// router.get('/:id/searchQuery', (req, res) => {
//   res.render('searchByGenre.ejs', {
//     data: data,
//     books: data.books
//   });

// })

//HOMEPAGE AFTER LOGIN

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