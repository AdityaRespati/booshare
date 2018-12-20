const express = require('express')
const router = express.Router()
const Model = require('../models')

//SHOW ALL BOOKS DATA
router.get('/', (req, res) =>{
  let data = null
  Model.books.findAll({
    include: [ Model.genre ]
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

router.get('/:id', (req, res) =>{
  let data = null
  Model.books.findAll({
    include: [ Model.genre]
  })
  .then(dataBooks => {
    // res.render('allBooks.ejs', {
    //   data: data
    // })
    // res.send(data)
    data= dataBooks
    return Model.user.findAll()
  })
  .then(dataUser =>{
    res.render('allBooks.ejs', {
      data:data, 
      dataUser:dataUser
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