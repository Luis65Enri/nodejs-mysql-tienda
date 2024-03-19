const sequelize = require('sequelize');
const database = new sequelize(
    'db_tienda',//nombre de la base de datos
    'root',//usuario de la base de datos
    'Luis12345%',//contraseñaLuis12345% 0955
    {
        host:'localhost',
        dialect:'mysql',
        port: 3306
    }
);
module.exports = database;