const Team = require('../models/team')

exports.all = (req, res) => {
    Team.find({}, (err, teams) => {
        if (err) {
            return res.status(400)
        }
        res.render('team/get.hbs', {
            teams: teams
        })
    })
}

exports.add = (req, res) => {
    res.render('team/add.hbs')
}

exports.store = (req, res) => {
    const team = new Team({
        teamName: req.body.teamName
    })
    team.save()
    res.redirect('/team')
}
