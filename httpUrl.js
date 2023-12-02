const http = require('http');
const path = require('path');
const fs = require('fs');

// we can use the url parameter that comes with the request object and then handle what's called server side routing.

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) =>{
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
           res.write(data);
          res.end(); // ending the request
        })
    }
    if(req.url === '/user') {
        res.write("Hi Junior, this page is for users!")
        res.end() // ending the request
    }
})

server.listen(5000, ()=> console.log("server running on port " + server.address().port))