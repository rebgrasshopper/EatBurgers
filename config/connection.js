//dependencies
const mysql = require("mysql");
const dbConfig = require("./db.config");

//create connection
const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});


module.exports = connection;