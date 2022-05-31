const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const feedRoutes = require('./routers/feed')

// app.use(bodyparser.urlencoded())  if we were give the data from  the <form> in the front end
app.use(bodyparser.json())    
app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') // or isntead of * use a specific domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, ')
  res.setHeader('Access-Control-Allow-Methods', 'Content-Type, Authorization')
  next()
} )
// application/json  the oficial  name what we would find in the header.
// we  need this middleware to parse incoming data so we are able to extract in the body
// the body field on the "req.body.title" ll be added by the body parser in out incoming request
 
app.use('/feed', feedRoutes)
app.listen(3000)