const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");

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
// Make public a static folder
app.use(express.static("public"));

// Setup Handlebars and Express-Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/", { useNewUrlParser: true });

// HTML Routes
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/home", function(req, res) {
    res.render("index");
});

app.get("/mirabelladifference", function(req, res) {
    res.render("mirabellaDifference");
});

app.get("/contemporarydoors", function(req, res) {
    const hbsObject = {
        heroComponentRightTitle: "Contemporary Doors Page",
        // heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
        heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
        heroComponentRightImageAlt: "Mirabella Doors - Contemporary Doors Banner Image",
    }
    res.render("contemporaryDoors", hbsObject);
});

app.get("/traditionaldoors", function(req, res) {
    res.render("traditionalDoors");
});

app.get("/doorfinishes", function(req, res) {
    res.render("doorFinishes");
});

app.get("/doordesignlibrary", function(req, res) {
    res.render("doorDesignLibrary");
});

app.get("/doorfinishes", function(req, res) {
    res.render("doorFinishes");
});

app.get("/balconiesandrailings", function(req, res) {
    res.render("balconiesAndRailings");
});

app.get("/contactus", function(req, res) {
    res.render("contactUs");
});

app.get("*", function(req, res) {
    res.render("404");
})


// Start the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});