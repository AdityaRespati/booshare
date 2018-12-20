const express = require('express')
const router = express.Router()
const Model = require('../models')
const hash = require('../helpers/hash')

router.get('/', (req, res) => {
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

router.get ('/login', (req, res) => {
  res.render('login.ejs');
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
          res.redirect(`/home/${userData.id}`)
        } else {
          throw 'Password Salah'
        }
      }
    })
    .catch((err) => {
      res.redirect(`/login?error=${err}`)
    })
})

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