require("dotenv").config();

// Import hbs Info
const hbsInfo = require("./public/assets/js/handlebarsLogic");

// console.log(hbsInfo);

// Import Keys
const keys = require("./keys");

// gMaps
const gMaps = keys.googleMaps;

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
    const hbsObject = hbsInfo.mbDiffPage;

    res.render("mirabellaDifference", hbsObject);
});

app.get("/contemporarydoors", function(req, res) {
    const hbsObject = hbsInfo.contDoorsPage;

    res.render("contemporaryDoors", hbsObject);
});

app.get("/traditionaldoors", function(req, res) {
    const hbsObject = hbsInfo.tradDoorsPage;

    res.render("traditionalDoors", hbsObject);
});

app.get("/doorfinishes", function(req, res) {
    const hbsObject = hbsInfo.doorFinishesPage;

    res.render("doorFinishes", hbsObject);
});

app.get("/doordesignlibrary", function(req, res) {
    const hbsObject = hbsInfo.doorDesignLibPage;

    res.render("doorDesignLibrary", hbsObject);
});

app.get("/balconiesandrailings", function(req, res) {
    const hbsObject = hbsInfo.balcAndRailPage;

    res.render("balconiesAndRailings", hbsObject);
});

app.get("/contactus", function(req, res) {
    const hbsObject = hbsInfo.contactUsPage;

    hbsObject.googleMapsApi = {
            width: "100%",
            height: "600",
            key: gMaps.secret
    };
    
    res.render("contactUs", hbsObject);
});

app.get("/ilightbox", function(req, res) {
    const hbsObject = hbsInfo;
    res.render("ilightboxExample", hbsObject);
});

app.get("*", function(req, res) {
    res.render("404");
});


// Start the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});