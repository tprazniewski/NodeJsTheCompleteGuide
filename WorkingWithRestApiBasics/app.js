const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const feedRoutes = require('./routers/feed')

// app.use(bodyparser.urlencoded())  if we were give the data from  the <form> in the front end
app.use(bodyparser.json())     
// application/json  the oficial  name what we would find in the header.
// we  need this middleware to parse incoming data so we are able to extract in the body
// the body field on the "req.body.title" ll be added by the body parser in out incoming request
 
app.use('/feed', feedRoutes)
app.listen(3000)