// include modueles from npm
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// define the relative variables
const port = 3000

// set the view template
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set the routes
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

// start and listen on server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})