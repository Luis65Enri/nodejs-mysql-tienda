const sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = require('./config.js');

const database = new sequelize(
    DB_NAME, // Nombre de la base de datos
    DB_USER, // Usuario de la base de datos
    DB_PASSWORD, // Contraseña de la base de datos
    {
        host: DB_HOST, // Host de la base de datos
        dialect: 'mysql',
        port: DB_PORT, // Puerto de la base de datos
        logging: console.log,
        dialectOptions: {
            connectTimeout: 30000 // Tiempo de espera en milisegundos
        }
    }
);

module.exports = database;
