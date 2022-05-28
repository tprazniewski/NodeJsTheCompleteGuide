const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res) => {

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
      fs.writeFile('message.txt',message, err => {
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
      })
    })


    
  }


  res.setHeader("Content-Type", "text/html");
  res.write('<h1> Default Route </h1>')
  res.end()
});

server.listen(3000)