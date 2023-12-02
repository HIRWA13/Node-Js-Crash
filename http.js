// http node module
// it helps us to work with server - you can create a server with the http module.

const http = require('http');

// creating a server
// we use the createServer method which also takes in a callback with two arguments: request and response
const server = http.createServer((request, response)=> {
    // request is what we get from the user
    // response is what we give the user
    response.write("Hello there user, how are you doing??") // what the user will see once they visit localhost:5000
    response.end() // don't forget to close the http connection otherwise it will keep loading....
})

// listening to the server on a certain  port
// we use server.listen() and provide in a port and callback function that indicates the status of the server whether it is running or not.

// this here is always there listeninng to incoming events (request) 
server.listen(5000, () => console.log("server running on port " + server.address().port))