const fs = require('fs')

const requestHandler = (req,res) => {
  if(req.url === '/' && req.method === 'GET'){
    res.setHeader("Content-Type", "text/html");
    res.write('<form action="/message" method="POST"> <input type="text" name="message"> <button type="submit>Send</button> </form>')
    return res.end()
  }
  if(req.url === '/message' && req.method === 'POST'){
    const body = [];
    req.on('data', (chunk) =>{  
      body.push(chunk)
    })
    req.on('end', () =>{
      const parseBody = Buffer.concat(body).toString()
      const message = parseBody.split('=')[1]
      fs.writeFile('message.txt',message, () => {
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
      })
    })
  
  
    
  }
  
  
  res.setHeader("Content-Type", "text/html");
  res.write('<h1> Default Route </h1>')
  res.end()

}


module.exports = {
  requestHandler
}