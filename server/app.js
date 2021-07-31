const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

const app = express()

let uri = 'mongodb://blog-db:b75EPfKQfG5dPPnw5JjbDa9ggH5cwJdiAcj0FiR4Z2hvgv1j0Hbd9PFlGiGASEKxMN48yP3UXR9xDCyMW6L4Jg==@blog-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@blog-db@'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
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

app.use('/', (req, res) => {
    res.send('Welcome to GraphQL')
})

app.listen(5000, () => {
    console.log('Server is starting')
})