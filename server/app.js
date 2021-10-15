require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

const driverController = require('./driver/driver.controller')
const teamController = require('./team/team.controller')

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

app.use('/team', teamController.get)
app.use('/', driverController.get)

app.listen(process.env.PORT, () => {
    console.log('Server is starting')
})