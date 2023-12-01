const username = "Junior"

const sayName = (name) => {
    console.log(`Hey ${name}`)
}

const sayAddress = (name) => {
    console.log(`${name} you live in Kigali, right?`)
}
module.exports.sayName = sayName
module.exports.sayAddress = sayAddress
module.exports.username = username