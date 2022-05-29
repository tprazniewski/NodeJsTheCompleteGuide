const express = require('express')
const router = express.Router()
const path = require('path') // we need this module to avoid having the absolute path/ we need to concat/join the absolute path and current path

router.get('/',(req, res, next) => {
  // res.send('<h1> Hello </h1>')
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
})


module.exports = router