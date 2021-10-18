const Driver = require('../models/driver')

exports.all = (req, res) => {
    Driver.find({}, (err, drivers) => {
        if (err) return res.status(400)
        res.render('driver/all.hbs', {drivers: drivers})
    })
}

exports.get = (req, res) => {
    Driver.findById(req.params.id, (err, driver) => {
        if (!driver) return res.send({error: 'Not Found'})
        if (!err) return res.render('driver/get.hbs', {driver: driver})
        else return res.send({error: 'Server error'})
    })
}

exports.add = (req, res) => {res.render('driver/add.hbs')}

exports.store = (req, res) => {
    const driver = new Driver({fullname: req.body.fullname})
    driver.save()
    res.redirect('/')
}

exports.destroy = (req, res) => {
    Driver.findOneAndDelete(req.params.id)
    res.redirect('/')
}