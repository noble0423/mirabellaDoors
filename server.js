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
    const hbsObject = {
        heroComponentLeftTitle: "Mirabella Difference Page",
        heroComponentLeftImage: "https://via.placeholder.com/1650x600?text=Hero+Banner+Component+(banner+-+left)",
        heroComponentLeftImageAlt: "The Mirabella Difference - Houston's Premier Custom Doors Banner Image",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("mirabellaDifference", hbsObject);
});

app.get("/contemporarydoors", function(req, res) {
    const hbsObject = {
        heroComponentRightTitle: "Contemporary Doors Page",
        // heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
        heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
        heroComponentRightImageAlt: "Mirabella Doors - Contemporary Doors Banner Image - Greater Houston",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("contemporaryDoors", hbsObject);
});

app.get("/traditionaldoors", function(req, res) {
    const hbsObject = {
        heroComponentLeftTitle: "Traditional Doors Page",
        heroComponentLeftImage: "/assets/images/mirabellaDoorsImgs/hero-component/trad_door_hero_banner.jpg",
        heroComponentLeftImageAlt: "Mirabella Doors - Traditional Doors Banner Image",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("traditionalDoors", hbsObject);
});

app.get("/doorfinishes", function(req, res) {
    const hbsObject = {
        heroComponentRightTitle: "Finishes Page",
        heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/door_handles_up_close.jpg",
        // heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/grape_cluster_up_close.jpg",
        // heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/leaves_up_close_warmer.jpg",
        // heroComponentRightImage: "/assets/images/mirabellaDoorsImgs/hero-component/leaves_up_close.jpg",
        // heroComponentRightImageAlt: "Mirabella Doors - High Quality Custom Door Finishes Banner Image",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("doorFinishes", hbsObject);
});

app.get("/doordesignlibrary", function(req, res) {
    const hbsObject = {
        heroComponentLeftTitle: "Door Design Library Page",
        heroComponentLeftImage: "https://via.placeholder.com/1650x600/87ceeb?text=Hero+Banner+Component+(banner+-+left)",
        heroComponentLeftImageAlt: "Mirabella Doors - Door Design Library Banner Image",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("doorDesignLibrary", hbsObject);
});

app.get("/balconiesandrailings", function(req, res) {
    const hbsObject = {
        heroComponentRightTitle: "Balconies and Railings Page",
        heroComponentRightImage: "https://via.placeholder.com/1650x600?text=Hero+Banner+Component+(banner+-+right)",
        heroComponentRightImageAlt: "Mirabella Doors - Custom Balconies and Railings Banner Image",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("balconiesAndRailings", hbsObject);
});

app.get("/contactus", function(req, res) {
    const hbsObject = {
        heroComponentLeftTitle: "Contact Us Page",
        heroComponentLeftImage: "https://via.placeholder.com/1650x600/87ceeb/FFFFFF?text=Hero+Banner+Component+(banner+-+left)",
        heroComponentLeftImageAlt: "Mirabella Doors - Expertly Crafted Custom Doors - Contact Us Banner Image",
        pageBreakerText: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
    }
    res.render("contactUs", hbsObject);
});

app.get("*", function(req, res) {
    res.render("404");
})


// Start the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});