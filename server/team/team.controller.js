const Team = require('../models/team')

exports.get = (req, res) => {
    Team.find({}, (err, teams) => {
        if (err) {
            return res.status(400)
        }
        res.render('team.hbs', {
            teams: teams
        })
    })
}