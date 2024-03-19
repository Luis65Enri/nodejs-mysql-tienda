const sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = require('./config.js');

const database = new sequelize(
    DB_NAME,        // nombre de la base de datos
    DB_USER,        // usuario de la base de datos
    DB_PASSWORD,    // contraseña
    {
        host: DB_HOST,
        dialect: 'mysql',
        port: DB_PORT
    }
);

module.exports = database;