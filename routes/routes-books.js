const express = require('express')
const router = express.Router()
const Model = require('../models')

//SHOW ALL BOOKS DATA
router.get('/', (req, res) =>{
  Model.books.findAll({
    // include: {model: Model.genres}
  })
  .then(data => {
    res.render('allBooks.ejs', {
      data: data
    })
  })
  .catch(err => {
    res.send(err);
  })
})

router.get('/admin', (req, res) => {
  Model.Books.update()
})



module.exports = router