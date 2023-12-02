const http = require('http');

// we can use the url parameter that comes with the request object and then handle what's called server side routing.

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Hello user, welcome to the homepage!")
        res.end() // ending the request
    }
    if(req.url === '/user') {
        res.write("Hi Junior, this page is for users!")
        res.end() // ending the request
    }
})

server.listen(5000, ()=> console.log("server running on port " + server.address().port))