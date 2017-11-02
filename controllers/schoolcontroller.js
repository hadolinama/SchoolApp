// Dependencies: Importing/requiring express
var express = require('express');

// router created and to be exported at the end of this file
var router = express.Router();

// Import the model (school.js) to use its database functions.
var school = require("../models/school.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  school.all(function(data) {
    var hbsObject = {
      school_table: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/school_table", function(req, res) {
  school.create([
    
  ], [
    req.body.table_name, req.body
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/school_table/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  school_table.update({
    
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/school_table/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  school_name.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
