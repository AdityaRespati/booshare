const express = require('express')
const app = express ()
const session = require('express-session')
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })

const user = require('./routes/routes-user')
const book = require('./routes/routes-books')
const genre = require('./routes/routes-genres')
const home = require('./routes/routes-home')

app.set('view engine', 'ejs')
app.use(express.json())

app.use(session({
  secret: 'booshare'
}))
app.use(express.urlencoded({extended:false}))

app.use('/home', home)
app.use('/user', user)
app.use('/book', book)
app.use('/genre', genre)

app.use('/', (req, res) => {
  res.render('landingPage.ejs', {
    err: null
  });
})


app.listen(3000, ()=>{
  console.log('server is listening on port 3000....');
})