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
        heroComponentLeft: {
            title: "Mirabella Difference Page",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/Cosmo SDFS.jpg",
                alt: "The Mirabella Difference - Houston's Premier Custom Doors Banner Image",
            },
        },
        pageBreakerText: { 
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        arrowComponentRight: {
            title: "",
            image: {
                src: "https://via.placeholder.com/1650x700/F6C35F/FFFFFF?text=Arrow+Component+(right)+-+The+Mirabella+Difference",
                alt: "",
            },
            animation: "wow fadeInRight slow",
        },
        arrowComponentLeft: {
            title: "",
            image: {
                src: "https://via.placeholder.com/1650x700/5ff6c3/FFFFFF?text=Arrow+Component+(left)+-+About-Pam",
                alt: "",
        },
            animation: "wow fadeInLeft slow",
        },
    }
    res.render("mirabellaDifference", hbsObject);
});

app.get("/contemporarydoors", function(req, res) {
    const hbsObject = {
        heroComponentRight: {
            title: "Contemporary Doors Page",
            // image: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
                alt: "Mirabella Doors - Contemporary Doors Banner Image - Greater Houston",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Small+Door+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
        imagesComponentRight: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+2"
                ],
                alt: [
                    "right test1111",
                    "right test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Small+Door+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
    }
    res.render("contemporaryDoors", hbsObject);
});

app.get("/traditionaldoors", function(req, res) {
    const hbsObject = {
        heroComponentLeft: {
            title: "Traditional Doors Page",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/trad_door_hero_banner.jpg",
                alt: "Mirabella Doors - Traditional Doors Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Small+Door+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
        imagesComponentRight: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Best+Selling+Door+IMG+2"
                ],
                alt: [
                    "right test1111",
                    "right test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Small+Door+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
    }
    res.render("traditionalDoors", hbsObject);
});

app.get("/doorfinishes", function(req, res) {
    const hbsObject = {
        heroComponentRight: {
            title: "Finishes Page",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/door_handles_up_close.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/grape_cluster_up_close.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/leaves_up_close_warmer.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/leaves_up_close.jpg",
                alt: "Mirabella Doors - High Quality Custom Door Finishes Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Finishes+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Finishes+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Finishes+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
    }
    res.render("doorFinishes", hbsObject);
});

app.get("/doordesignlibrary", function(req, res) {
    const hbsObject = {
        heroComponentLeft: {
            title: "Door Design Library Page",
            animation: "wow fadeIn slow",
            // image: "https://via.placeholder.com/1650x600/87ceeb?text=Hero+Banner+Component+(banner+-+left)",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/architect-back-black-and-white-1496141.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/Lady_laptop.jpg",
                alt: "Mirabella Doors - Door Design Library Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Non+-+CAD+Design+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Non+-+CAD+Design+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Small+CAD+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
        imagesComponentRight: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Non+-+CAD+Design+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Non+-+CAD+Design+IMG+2"
                ],
                alt: [
                    "right test1111",
                    "right test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Small+CAD+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
    }
    res.render("doorDesignLibrary", hbsObject);
});

app.get("/balconiesandrailings", function(req, res) {
    const hbsObject = {
        heroComponentRight: {
            title: "Balconies and Railings Page",
            animation: "wow fadeIn slow",
            image: {
                src: "https://via.placeholder.com/1650x600?text=Hero+Banner+Component+(banner+-+right)",
                alt: "Mirabella Doors - Custom Balconies and Railings Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Large+Railing+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Large+Railing+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // change to an array (this will be grabbed from db later)
                src: "https://via.placeholder.com/200x325?text=Railing+IMG",
                alt: "small image alt test",
                animation: "wow fadeIn slower",
            },
        },
    }
    res.render("balconiesAndRailings", hbsObject);
});

app.get("/contactus", function(req, res) {
    const hbsObject = {
        heroComponentLeft: {
            title: "Contact Us Page",
            animation: "wow fadeIn slow",
            image: {
                src: "https://via.placeholder.com/1650x600/87ceeb/FFFFFF?text=Hero+Banner+Component+(banner+-+left)",
                alt: "Mirabella Doors - Expertly Crafted Custom Doors - Contact Us Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        arrowComponentRight: {
            title: "",
            image: {
                src: "https://via.placeholder.com/1650x700/F6C35F/FFFFFF?text=Arrow+Component+(right)+-+Contact+Form+(email)",
                alt: "",
            },
            animation: "wow fadeInRight slow",
        },
        arrowComponentLeft: {
            title: "",
            image: {
                src: "https://via.placeholder.com/1650x700/5ff6c3/FFFFFF?text=Arrow+Component+(left)+-+Contact+Info",
                alt: "",
            },
            animation: "wow fadeInLeft slow",
        },
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