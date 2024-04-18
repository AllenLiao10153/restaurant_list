// include express moduele
const express = require('express')
const app = express()

// define the relative variables
const port = 3000

// set the routes
app.get('/', (req, res) => {
  res.send('project init')
})

// start and listen on server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})