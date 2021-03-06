// app.js

// load packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// configure mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	
	// connected to mongodb server
	console.log("Connected to mongod server");
});
                          
mongoose.connect('mongodb://localhost/mongodb_tutorial');




// configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure server port
var port = process.env.PORT || 8080;

var Book = require('./models/book');

// configure router
var router = require('./routes')(app, Book);

// run server
var server = app.listen(port, function(){
	console.log("Express server has started on port " + port);
});