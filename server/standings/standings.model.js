module.exports = (sequelize, Sequelize) => {
    const Standing = sequelize.define('standing', {
        point: {
            type: Sequelize.INTEGER
        }
    })
    return Standing
}