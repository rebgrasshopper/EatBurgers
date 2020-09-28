//dependencies
const mysql = require("mysql");

//create connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgerdb",
});

//activate connection
connection.connect(function(err){
    if (err) {
        return console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;