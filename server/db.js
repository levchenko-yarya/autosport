const Sequelize = require('sequelize')

const sequelize = new Sequelize() // настройки БД

const Driver = require('./driver/driver.model')
const Team = require('./team/team.model')
Team.hasMany(Driver)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.driver = Driver
db.team = Team
module.exports = db