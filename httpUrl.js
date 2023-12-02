const http = require('http');

// we can use the url parameter that comes with the request object and then handle what's called server side routing.

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>Hello user, welcome to the homepage!</h1>")
        res.write("<h2>Do you like Kambouchaa???</h2>")
        res.write("<h4>I know you do, don't lie to us</h4>")
        res.end() // ending the request
    }
    if(req.url === '/user') {
        res.write("Hi Junior, this page is for users!")
        res.end() // ending the request
    }
})

server.listen(5000, ()=> console.log("server running on port " + server.address().port))