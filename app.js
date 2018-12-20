const express = require('express')
const app = express ()
// const cookieParser = require('cookie-parser')
const session = require('express-session')

const user = require('./routes/routes-user')
const book = require('./routes/routes-books')
const genre = require('./routes/routes-genres')
const home = require('./routes/routes-home')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(session)

app.use('/home', home)
app.use('/user', user)
app.use('/book', book)
app.use('/genre', genre)

app.use('/', (req, res) => {
  res.render('landingPage.ejs');
})

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'booshare'
}))


app.listen(3000, ()=>{
  console.log('server is listening on port 3000....');
})