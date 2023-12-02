// fs module or file system module
// it helps us to work with files on our computer

const fs = require('fs');


//syntax:  fs.writeFile (filename, value or data, callbackFn)

const data = "hello world, i have a nice job and I will be happy with your business"

// fs.writeFile("message.txt", data, ((err) => {
//     if(err) throw err;
//     console.log('file has been written')
// }));

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
})

console.log("let's see if it is asynchronous or not")