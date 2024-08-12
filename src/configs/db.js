const mysql = require('mysql');
const { getEnv } = require('../utils/getEnv');

let db = mysql.createConnection({
    host: getEnv('DB_HOST'),
    user: getEnv('DB_USER'),
    password: getEnv('DB_PASSWORD'),
    database: getEnv('DB_DATABASE'),
});

module.exports = { db };
