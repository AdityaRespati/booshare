const express = require('express')
const router = express.Router()
const Model = require('../models')

//SHOW ALL BOOKS DATA
router.get('/', (req, res) =>{
  res.send('allBooks.ejs')
})

module.exports = router