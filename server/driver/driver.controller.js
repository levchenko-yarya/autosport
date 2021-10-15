const Driver = require('../models/driver')

exports.get = (req, res) => {
    Driver.find({}, (err, drivers) => {
        if (err) {
            return res.status(400)
        }
        res.render('index.hbs', {
            drivers: drivers
        })
    })
}