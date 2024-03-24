const sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = require('./config.js');

const database = new sequelize(
    'db_tienda',
    'root',
    'Luis12345%',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        logging: console.log
    }
    
);

module.exports = database;
