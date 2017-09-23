var orm = require('../config/orm.js');

var burgerActions = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(req, res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vols, function(req, res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition,cb) {
        orm.updateOne('burgers', objColVals, condition, function(req, res) {
            cb(res);
        });
    }
};

module.exports = burgerActions;