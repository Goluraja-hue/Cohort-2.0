const mongoose = require('mongoose');
const dns = require('dns')

dns.setServers([
    '1.1.1.1',
    '8.8.8.8',
    '0.0.0.0'
])

function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
            console.log('Connect to Database')
})
}


module.exports = connectToDB;
