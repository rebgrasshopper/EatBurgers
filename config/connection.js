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

// //activate connection
// connection.connect(function(err){
//     if (err) {
//         return console.error("error connecting: " + err.stack);
//     }
//     console.log("connected as id " + connection.threadId);
// });


module.exports = connection;