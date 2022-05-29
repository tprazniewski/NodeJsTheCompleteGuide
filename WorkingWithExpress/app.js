const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const path = require('path')

const app = express()
//thanks to the below line of code We are able to use req.body later on
app.use(bodyParser.urlencoded({extended: false}))
//add css file coombining with the link tag in hmtl
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRouter)



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
  // res.status(404).send('<h1> Page not found 404</h1>')
})


app.listen(3000)