const Driver = require('../models/driver')

exports.all = (req, res) => {
    Driver.find({}, (err, drivers) => {
        if (err) {
            return res.status(400)
        }
        res.render('driver/get.hbs', {
            drivers: drivers
        })
    })
}

exports.add = (req, res) => {
    res.render('driver/add.hbs')
}

exports.store = (req, res) => {
    const driver = new Driver({
        fullname: req.body.fullname
    })
    driver.save()
    res.redirect('/driver')
}
