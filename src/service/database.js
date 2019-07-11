const Sequelize = require('sequelize');
module.exports = new Sequelize('salvus', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})
