const os = require('os')


// info abt current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime in sec

console.log(`The system uptiome is ${os.uptime} seconds`)



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(os.currentOS)