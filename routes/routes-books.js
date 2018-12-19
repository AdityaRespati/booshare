const express = require('express')
const router = express.Router()
const Model = require('../models')

//SHOW ALL BOOKS DATA
router.get('/', (req, res) =>{
  Model.books.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err);
  })
  // res.render('allBooks.ejs')
})


module.exports = router