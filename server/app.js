require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')

const driverRouter = require('./driver/driver.router')
const teamRouter = require('./team/team.router')
const scheduleRouter = require('./schedule/schedule.router')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'hbs')

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
)

app.use('/team', teamRouter)
app.use('/driver', driverRouter)
app.use('/schedule', scheduleRouter)
app.use('/', (req, res) => {
    res.render('index.hbs')
})

module.exports = app
