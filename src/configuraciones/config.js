require('dotenv').config();

const DB_HOST = process.env.DB_HOST || 'monorail.proxy.rlwy.net'
console.log(`DB_HOST: ${DB_HOST}`);

const DB_USER = process.env.DB_USER || 'root'
console.log(`DB_USER: ${DB_USER}`);

const DB_NAME = process.env.DB_NAME || 'db_tienda'
console.log(`DB_NAME: ${DB_NAME}`);

const DB_PASSWORD = process.env.DB_PASSWORD || 'TUqrIuURGvbCdIsdeBGmYkacwOeellts'
console.log(`DB_PASSWORD: ${DB_PASSWORD}`);

const DB_PORT = process.env.DB_PORT || 14259
console.log(`DB_PORT: ${DB_PORT}`);

module.exports = {
    DB_HOST,
    DB_USER,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT
};

