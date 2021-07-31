const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
    fullname: String
})

module.exports = mongoose.model('Driver', driverSchema)