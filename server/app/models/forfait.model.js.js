module.exports = (connex, Sequelize) => {
    const Forfait = connex.define('forfait', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.REAL
        },
        photo: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false  // <-- Ajoute cette ligne !
    })
    return Forfait
}
