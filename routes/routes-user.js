const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res) =>{
  res.send('all user data')
})


//REGISTER USER
router.post('/register', (req, res) => {
  let obj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    secret: req.body.secret
  }
  Model.user.create(obj)
  .then(data => {
    res.redirect('/home');
  })
  .catch(err => {
    res.send(err);
  })
})

module.exports = router