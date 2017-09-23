// Dependencies
var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// Routes
// --Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

// Index page that grabs all the burgers
router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {burgers: data}
        // console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

// Creating a new burger
router.post('/burger/create', function(req, res) {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, false
    ], function(data) {
        res.redirect('/index');
    });
});

// Update a burger
router.put('/burger/:id', function(req, res) {
    var condition = 'id =' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;

