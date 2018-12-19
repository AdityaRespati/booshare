const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res) =>{
  res.send('home')
})

router.get('/:id', (req,res) =>{
  Model.user
  .findOne ({where: 
    {id:req.params.id}
  })
  .then(dataUser =>{
    res.render('home.ejs', {dataUser})
  })
  .catch(err =>{
    console.log(err);
    res.send(err)
  })
})

router.get('/:id/addBook', (req, res)=>{
  Model.genre
  .findAll()
  .then(dataGenre =>{
    res.render('addBook.ejs', {dataGenre})
  })
})

router.post('/:id/addBook', (req, res)=>{
  let objBooks = {
    title: req.body.title,
    authorName: req.body.authorName,
    GenreId: req.body.GenreId
  }

  Model.books
  .create(objBooks)
  .then(dataBook =>{
    res.redirect('/home/:id')
  })
  .catch(err =>{
    res.send(err)
    console.log(err);
  })
})


module.exports = router