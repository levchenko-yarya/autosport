const Schedule = require('./schedule.model')

exports.all = (req, res) => {
    Schedule.find({}, (err, schedules) => {
        res.render('schedule/get.hbs', {
            schedules: schedules
        })
    })
}

exports.add = (req, res) => {
    res.render('schedule/add.hbs')
}

exports.store = (req, res) => {
    const schedule = new Schedule({
        race: req.body.race,
        track: req.body.track,
        date: req.body.date
    })
    schedule.save()
    res.redirect('/')
}
