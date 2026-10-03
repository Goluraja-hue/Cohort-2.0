const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    name : String,
    course : String,
    college : String
})


const infoModel = mongoose.model('info',infoSchema)


module.exports = infoModel