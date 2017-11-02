// Import the ORM to create functions that will interact with the database.
var orm = require("../connection/orm.js");

var school = {
  all: function(cb) {
    orm.all("school", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("school", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("school", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("school", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (schoolcontroller.js).
module.exports = school;
