require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

const driverRouter = require('./driver/driver.router')
const teamRouter = require('./team/team.router')

const app = express()
app.use(cors())
app.set('view engine', 'hbs')

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
})

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
)

app.use('/team', teamRouter)
app.use('/driver', driverRouter)
app.use('/', (req, res)=> {
    res.render('index.hbs')
})

module.exports = app