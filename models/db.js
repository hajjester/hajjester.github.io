const Sequelize = require('sequelize')

const sequelize = new Sequelize('agendamento', 'root', '1234567', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}