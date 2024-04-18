// include modueles from npm
const express = require('express')
const exphbs = require('express-handlebars')

// include restaurant data
const restaurants = require('./restaurant.json').results

const app = express()

// define the relative variables
const port = 3000

// set the view template
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set the routes
app.use(express.static('public'))

// index
app.get('/', (req, res) => {
  res.render('index', {restaurants})
})

// show
app.get('/restaurants/:id', (req, res) => {
  const id = Number(req.params.id)
  const restaurant = restaurants.find(restaurant => restaurant.id === id)
  res.render('show', {restaurant})
})

// search
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const filted_restaurants = restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) 
    || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', {restaurants: filted_restaurants, keyword})
})

// start and listen on server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})