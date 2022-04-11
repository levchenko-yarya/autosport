module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define('team', {
        title: {
            type: Sequelize.STRING
        }
    })
    return Team
}