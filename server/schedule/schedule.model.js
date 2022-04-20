module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define('schedule', {
        race: {
            type: Sequelize.STRING
        },
        track: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },
    })
    return Schedule
}