const Sequelize = require('sequelize');
const db = require('../service/database');

const Paciente = db.define('paciente', {
    name: {
        type: Sequelize.STRING
    },
    medicament: {
        type: Sequelize.STRING
    }
})


Paciente.sync()

module.exports = Paciente;