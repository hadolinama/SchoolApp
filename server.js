// Dependencies: express: bodyParser: method_overide
var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
//node package to enable path manipulation
var path = require("path");

// Sets up the Express and PORT
var app = express();
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, './public')));

// app.use(express.static ("method-override"));

// ROUTES:
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, '../public/main.html'));
});

// app.get('/about', function(req, res){
//    res.send('index')
// });
// app.get('/login', function(req, res){
//    res.send('index')
// });
// app.get('/teachers', function(req, res){
//    res.send('index')
// });
// app.get('/signup', function(req, res){
//    res.send('index')
// });
// app.get('/enroll', function(req, res){
//    res.send('index')
// });

// connected to savedata in index.handlebars
app.post('/savedata', function(req, res){
   console.log('Data Successfully Logged!', req.body)
});



// PORT LISTENING
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});