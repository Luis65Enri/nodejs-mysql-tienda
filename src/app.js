// Environment variables and Sequelize configuration
const port = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
// Other environment variables...

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

// Express application setup
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./configuraciones/config');

const app = express();
app.use(cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST']
}));
app.set('port', PORT);
app.use(morgan('common'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routing
app.use('/api/', require('./rutas'));
// Other routes...

// Listening for requests
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
});