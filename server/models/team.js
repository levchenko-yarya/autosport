const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamName: String
})

module.exports = mongoose.model('Team', teamSchema)