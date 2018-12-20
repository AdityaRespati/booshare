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
    res.redirect(`/home/${data.id}`);
  })
  .catch(err => {
    res.send(err);
  })
})

//LOGIN USER
router.post('/login', (req, res) => {
  let userLogin = req.body
  let userData = null
  Model.user
  .findOne({where: {username: userLogin.username}})
  .then((usernameChecking) => {
      if (!usernameChecking) {
          throw 'Username Tidak Ditemukan'
      } else {
          userData = usernameChecking
          let syncPassWithHash = syncPassword(req.body.password, userData.secret)
          return Model.user.findOne({
              where: {password: syncPassWithHash}
          })
      }
  })
  .then(passwordChecking => {
      if (passwordChecking === null) {
          throw 'Password Salah'
      } else {
          req.session.user = {
              id: passwordChecking.id,
              username: passwordChecking.username,
              membership: passwordChecking.membership,
              balance: passwordChecking.balance
          }
              res.redirect('/')
      }
  })

  .catch((err) => {
      res.redirect(`/login?error=${err}`)
  })
})


module.exports = router