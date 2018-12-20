const express = require('express')
const router = express.Router()
const Model = require('../models')
const hash = require('../helpers/hash')

router.get('/', (req, res) => {
  res.send('all user data')
})


//REGISTER USER
router.get('/register', (req,res) => {
  let err = req.query.error
  res.render('landingPage.ejs', {
    err: err || null
  })
})

router.post('/register', (req, res) => {
  let obj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    secret: req.body.secret
  }
  Model.user.create(obj)
    .then(data => {
      res.redirect(`/home`);
    })
    .catch(err => {
      res.redirect(`/user/register/?error=${err.errors[0].message}`);
    })
})

//LOGIN USER
router.get ('/login', (req, res) => {
  let err = req.query.error
  res.render('login.ejs', {
    err: err || null
  });
})

router.post('/login', (req, res) => {
  Model.user.findOne({
    where: { username: req.body.username}
  })
    .then((userData) => {
      if (!userData) {
        throw 'Username Tidak Ditemukan'
      } else {
        let passHash = hash(req.body.password, userData.secret)
        if (passHash.hash === userData.password) {
          req.session.user = {
            id: userData.id,
            username: userData.username,
          }
          res.redirect(`/home`)
        } else {
          throw 'Password Salah'
        }
      }
    })
    .catch((err) => {
      res.redirect(`/user/login/?error=${err}`)
    })
})

//LOGOUT USER
router.get('/logout', (req,res)=>{
  req.session.destroy(function(err) {
    if (err) {
      res.send(err)
    } else {
      res.redirect('/')
    }
  })
  // res.send(req.session)
  console.log(req.session);
  
})




module.exports = router