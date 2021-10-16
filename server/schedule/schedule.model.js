const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scheduleSchema = new Schema({
    race: String,
    track: String,
    date: Date
})

module.exports = mongoose.model('Schedule', scheduleSchema)