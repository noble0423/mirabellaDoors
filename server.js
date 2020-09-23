require("dotenv").config();

// Import hbs Info

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
// const axios = require("axios");
const html = require("./routes/html");
const api = require('./routes/api');
// Require all models
// const db = require("./models");

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Compression Middleware
app.use(compression());
// Make public a static folder
app.use(express.static("public"));

// Setup Handlebars and Express-Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
// URL parser option alternative.
mongoose.connect(process.env.MONGODB_URI || "mongodb://mirabella:mirabelladoors1@ds361998.mlab.com:61998/mirabella", { useNewUrlParser: true });

//Using seperate routes for HTML and API 
app.use('/', api);
app.use('/', html);

// Start the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});