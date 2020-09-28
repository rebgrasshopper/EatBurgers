const { response } = require("express");
//dependencies
const connection = require("./connection");

const orm = {
    findAll: function() {
        return new Promise(function(resolve, reject){
            const query = "SELECT * FROM burgers;";
            connection.query(query, function(err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    },

    create: function(burger) {
        return new Promise(function(resolve, reject){
            const query = 'INSERT INTO burgers SET ?;';
            connection.query(query, burger, function(err, data){
                if (err) reject(err);
                resolve(data);
            });
        });
    },


    update: function(id, eaten) {
        return new Promise(function(resolve, reject) {
            const query = "UPDATE burgers SET eaten = ? WHERE id = ?";
            console.log(id);
            console.log(eaten);
            connection.query(query, [eaten, id], function(err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    },

    destroy: function(id) {
        return new Promise(function(resolve, reject){
            const query = 'DELETE FROM burgers WHERE id = ' + id;
            connection.query(query, function(err, data){
                if(err) reject(err);
                resolve(data);
            });
        });
    },
}

module.exports = orm;