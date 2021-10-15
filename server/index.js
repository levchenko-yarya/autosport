const app = require('./app')

app.listen(process.env.PORT, () => {
    console.log(`Server is starting on ${process.env.PORT} port`)
})