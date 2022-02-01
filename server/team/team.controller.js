const Team = require('../models/team')

exports.all = (req, res) => {
    Team.find({}, (err, teams) => {
        if (err) {
            return res.status(400)
        }
        res.render('team/all.hbs', {
            teams: teams
        })
    })
}

exports.get = (req, res) => {
    Team.findById(req.params.id, (err, team) => {
        if (!team) return res.send({error: 'Not Found'})
        if (!err) return res.render('team/get.hbs', {team: team})
        else return res.send({error: 'Server error'})
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
    res.redirect('/')
}

exports.destroy = (req, res) => {
    Team.findOneAndDelete(req.params.id)
    res.redirect('/')
}