// Require dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set up port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate Express App
var app = express();

// Require routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});