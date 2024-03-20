const sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = require('./config.js');

const database = new sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'mysql',
        port: DB_PORT
    }
);

module.exports = database;
