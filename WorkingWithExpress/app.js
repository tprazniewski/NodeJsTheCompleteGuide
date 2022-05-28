const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRouter)



app.use((req, res, next) => {
  res.status(404).send('<h1> Page not found 404</h1>')
})


app.listen(3000)