const sayInfo = require('./sayInfo')

console.log(sayInfo) 
sayInfo.sayName(sayInfo.username)
sayInfo.sayAddress(sayInfo.username)

console.log(`directory name: ${__dirname}`)
console.log(`filename: ${__filename}`)
console.log("welcome nodemon")