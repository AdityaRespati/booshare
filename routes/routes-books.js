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

router.get('/admin', (req, res) => {
  Model.Books.update()
})



module.exports = router