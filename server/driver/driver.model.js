module.exports = (sequelize, Sequelize) => {
    const Driver = sequelize.define('driver', {
        fullname: {
            type: Sequelize.STRING
        }
    })
    return Driver
}