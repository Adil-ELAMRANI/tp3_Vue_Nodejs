const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')

// Création de la connexion Sequelize
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: 3306,
    operatorAliases: false
})

const db = {}

db.Sequelize = Sequelize
db.connex = connex
db.forfaits = require('./forfait.model.js')(connex, Sequelize);

module.exports = db