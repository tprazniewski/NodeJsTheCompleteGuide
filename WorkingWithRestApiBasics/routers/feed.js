const express = require('express')
const router = express.Router()
const feedControllers = require('../controllers/feed')


router.get('/posts', feedControllers.getPosts)
//.createPost is an action/method
router.post('/posts', feedControllers.createPosts)

module.exports = router