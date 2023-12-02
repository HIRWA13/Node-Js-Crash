const url = require('url');

const address = "https://github.com/HIRWA13?tab=repositories";

const parsedUrl = url.parse(address, true); // returns a parsed url in an object with some extra information about the url being parsed and we can access each property later
console.log(parsedUrl);
console.log(parsedUrl.protocol) // returns - https
console.log(parsedUrl.host) // returns github.com
console.log(parsedUrl.hostname) // gives github.com
console.log(parsedUrl.pathname) // returns /HIRWA13
console.log(parsedUrl.path) // returns HIRWA13?tab=repositories