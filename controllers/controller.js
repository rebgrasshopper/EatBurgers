//dependencies
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.findAll().then(function(data){
        console.log(data);
        res.render("index", {burgers:data});
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(req.body).then(function(data){
        res.json(data);
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    burger.destroy(req.params.id).then(function(data){
        res.send(200).end();
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let eaten = req.body.eaten;
    burger.update(req.params.id, req.body.eaten).then(function(data){
        res.status(200).end();
        // burger.findAll().then(function(data){
        //     console.log("I found things after the PUT");
        //     console.log(data);
        //     res.render("partials/burger-block", {burgers:data});
        // })
    })
})
module.exports = router;