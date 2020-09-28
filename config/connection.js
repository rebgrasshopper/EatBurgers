//dependencies
const mysql = require("mysql");

//create connection
const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    user: "beece5efde1e6a",
    password: "ebaeb982",
    database: "heroku_b40ee44a4c03c0a",
});

//activate connection
connection.connect(function(err){
    if (err) {
        return console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;