const path = require('path')

// the join() method, which joins together the arguments you pass to it to create a path segment
const locationPath = path.join(__filename, 'app.js')
console.log(locationPath)

// basename
// basename() method, which returns the last portion of a path
const basename = path.basename(locationPath)
console.log(basename)