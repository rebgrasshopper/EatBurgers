//dependencies
const connection = require("./connection");

const orm = {
    findAll: function(whereColumn, whereValue) {
        return new Promise(function(resolve, reject){
            const query = `SELECT * FROM burgers WHERE ${whereColumn} LIKE ${wherevalue};`;
            connection.query(query, function(err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    },
}

module.exports = orm;