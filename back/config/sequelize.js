
const fs = require('fs');

module.exports = {
    development: {
        username: 'root',
        password: 'password',
        database: 'airbnb',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    test: {
        username: 'database_test',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_USER_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {}
        }
    }
};