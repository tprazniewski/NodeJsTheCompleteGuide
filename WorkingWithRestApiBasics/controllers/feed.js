getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{
      title: 'FirstPost',
      coontent: "First Text"
    }]
  })
}

createPosts = (req, res, next) => {
  const title = req.body.title
  const content = req.body.content

  res.status(201).json({
    message: "elo",
    post: { title: title, content: content }
  })
}

module.exports = {
  getPosts,
  createPosts
}