// Dependencies
var express = require('express');
var burgers = require('../models/burger.js');
var router = express.Router();

// Routes
// --Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

// Index page
router.get('/index', function(req, res) {
   connection.query("SELECT* FROM burgers", function(err, data) {
    if (err) throw err;
    res.redirect('/index');
   });
});

// Creating a new burger
router.post('/burger/create', function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES ?", [req.body.burger], function(err, result) {
        if (err) throw err;
        res.redirect('/index');
    });
});

// Update a burger
router.put('/burger/update', function(req, res) {
    connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger_name, req.body.id], function(err, results) {
        if (err) throw err;
        res.redirect('/index');
    });
});

module.exports = router;

