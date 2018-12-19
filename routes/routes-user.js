const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res) =>{
  res.send('all user data')
})

module.exports = router