const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    Name : String,
    Course : String,
    College : String,
    Pincode : String,
    City :String
})

const infoModel = mongoose.model('info',infoSchema)



module.exports = infoModel