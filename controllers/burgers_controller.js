// Dependencies
var express = require('express');
var burgerActions = require('../models/burger.js');
var router = express.Router();

// Routes
// --Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

// Index page
router.get('/index', function(req, res) {
    burgerActions.selectAll(function(data) {
        var hbsObj = {burgers: data}
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

// Creating a new burger
router.post('/burger/create', function(req, res) {
    burgerActions.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect('/');
    });
});

// Update a burger
router.put('/burger/:id', function(req, res) {
    var condition = 'id =' + req.params.id;

    burgerActions.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;

