const express = require('express')
const app = express ()
const user = require('./routes/routes-user')
const book = require('./routes/routes-books')
const genre = require('./routes/routes-genres')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/user', user)
app.use('/book', book)
app.use('/genre', genre)

app.listen(3000, ()=>{
  console.log('server is listening on port 3000....');
})