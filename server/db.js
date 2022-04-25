const Sequelize = require('sequelize')

const sequelize = new Sequelize() // настройки БД

const Driver = require('./driver/driver.model')
const Team = require('./team/team.model')
Team.hasMany(Driver)

const Schedule = require('./schedule/schedule.model')
const Standing = require('./standings/standings.model')

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.driver = Driver
db.team = Team
db.schedule = Schedule
db.standing = Standing

module.exports = db