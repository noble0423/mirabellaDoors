require("dotenv").config();

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
    const hbsObject = {
        heroComponentLeft: {
            title: "Mirabella Difference Page",
            animation: "wow fadeIn slow",
            image: {
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/Cosmo SDFS.jpg",
                src: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
                alt: "The Mirabella Difference - Houston's Premier Custom Doors Banner Image",
            },
        },
        pageBreakerText: { 
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        arrowComponentRight: {
            title: {
                title: "The Mirabella Difference",
                id: "mirabellaDifferenceTitleId"
            },
            wording: {
                paragraphs: [
                    "Our mission at Mirabella Doors is to bring high quality, custom wrought iron doors to the market place at a competitive price with superior customer service. Our commitment to excellence begins with design selection and ends when the door is completely installed and the home owner or home builder is satisfied.",

                    "At Mirabella Doors, we understand construction schedules and recognize the importance in delivering the product on time, every time. Our motto is “you only have one chance to make a first impression”. Mirabella Doors keeps this in mind as we work seamlessly with builders, designers and architects. As a company and partner with your builder, Mirabella Doors will impress with the thoughtfulness and attention to detail that befits an elegant home and high quality builder. As a product, Mirabella doors will deliver a lifetime of first impressions with elegant and timeless designs and an enduring product.",

                    '"First impressions" is not only our motto, it is our specialty!',
                ],
                bkgrndColor: "#f6fae8",
                id: "mirabellaDifferenceText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/mirabella_difference_piano_room.jpg",
                alt: "The Mirabella Difference - Mirabella Doors - Custom Doors Houston, TX",
                id: "mirabellaDifferenceImg",
            },
            animation: {
                arrow: "wow fadeInRight slow",
                image: "wow fadeInLeft slow",
            },
        },
        arrowComponentLeft: {
            title: {
                title: "Meet the Owner",
                id: "meetTheOwnerTitleId"
            },
            wording: {
                paragraphs: [
                    "Pam Miller owns and operates Mirabella Doors. She has 15 years in the construction industry, specializing in custom iron entryways for over 10 years.  Pam has always been drawn to the creative aspect of construction and design and works hard to create beautiful, upscale entryways that join the personal taste of the homeowner while staying true to the style of the home.",

                    "Mirabella Doors works very closely with Houston’s finest custom home builders and interior designers.  By consistently providing a high-end, custom product and combining it with exceptional service, Pam Miller, has built a solid reputation in the industry for surpassing customer expectations.",
                ],
                bkgrndColor: "#f6f0ea",
                id: "meetTheOwnerText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/pam-mirabella_doors_houston.jpg",
                alt: "Owner - Mirabella Doors - Custom Doors Houston",
                id: "meetTheOwnerImg",
            },
            animation: {
                arrow: "wow fadeInLeft slow",
                image: "wow fadeInRight slow",
            },
        },
        xsArrowTransformRight: {
            backgroundImage: {
                darken: "linear-gradient(45deg, rgba(50, 50, 50, 0.5) 0%, rgba(100, 100, 100, .5) 80%)",
            },
            textDiv: {
                id:"mirabellaDifferenceXSDiv",
            },
            title: {
                id: "mirabellaDifferenceXSTitle",
            },
            wording: {
                id: "mirabellaDifferenceXSText",
            },
        },
        xsArrowTransformLeft: {
            backgroundImage: {
                darken: "linear-gradient(45deg, rgba(75, 75, 75, 0.4) 0%, rgba(125, 125, 125, .4) 80%)",
            },
            textDiv: {
                id: "meetTheOwnerXSDiv",
            },
            title: {
                id: "meetTheOwnerXSTitle",
            },
            wording: {
                id: "meetTheOwnerXSText",
            },
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
            one: {

            },
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Contemporary_Clearbrook.jpg", 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan-Sleek.jpg"
                ],
                alt: [
                    "left test1111",
                    // "left test2222",
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
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Contemporary_Clearbrook_wine.jpg", 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan Front Entry Doors.jpg"
                ],
                alt: [
                    "right test1111",
                    // "right test2222",
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
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Bellagio_DD.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Madison_full_surround.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/trad_stone_topper.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/trad_indoor_rounded.jpg"
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
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/tall_curved_traditional.jpg", 
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_rounded_wine.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/trad_outdoor_rounded.jpg"
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
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/showroom_two_doors.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/pencil_on_CAD_drawing.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/leaves_detail.jpg", 
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/showroom_trad.jpg",
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
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/swatch_on_CAD_drawing.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/door_handles_detail.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/showroom_cont_square.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/artist_drawing.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/wine_gate_detail.jpg", 
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
                src: "/assets/images/mirabellaDoorsImgs/hero-component/railing_up_close.jpg",
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
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Sydney_Gate.jpg", 
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
        googleMapsApi: {
            width: "100%",
            height: "600",
            key: gMaps.secret
        },
        heroComponentLeft: {
            title: "Contact Us Page",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/contact_us_meeting_image.jpg",
                alt: "Mirabella Doors - Expertly Crafted Custom Doors - Contact Us Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        arrowComponentRight: {
            title: "Send Us an Email",
            wording: {
                paragraphs: [
                    "NAME (required): name input field will go here",
                    "EMAIL ADDRESS (required): email input field will go here",
                    "SUBJECT: subject input field will go here",
                    "MESSAGE (required): message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here message text area will go here",
                ],
                bkgrndColor: "#e0f7f4",
                id: "contactUsEmailText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/Cosmopolitan DDT.jpg",
                alt: "Contact Us - Mirabella Doors - Custom Doors Houston, TX",
                id: "contactUsEmailImg",
            },
            animation: {
                arrow: "wow fadeInRight slow",
                image: "wow fadeInLeft slow",
            },
        },
        arrowComponentLeft: {
            title: "Contact Us",
            wording: {
                paragraphs: [
                    "Disrupt green juice woke, hashtag hot chicken locavore typewriter meggings. Letterpress pabst lomo lumbersexual selvage glossier. Fixie post-ironic snackwave asymmetrical salvia. Stumptown succulents 3 wolf moon, you probably haven't heard of them tilde poutine ramps.",

                    "ADDRESS: 1234 Address Ln. Houston, TX 77777",
                    "PHONE NUMBER: (XXX) XXX - XXXX",
                    "HRS OF OPERATION: Mon.-Fri 8:00a-5:00p",
                    "*** We are often on the job site, so while walk-ins are welcome, we cannot guarantee that someone will be here to help. We highly recommend making an appointment.",
                ],
                bkgrndColor: "#ebf2e8",
                id: "contactUsText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/contact_us_front-door_dusk.jpg",
                alt: "Contact Mirabella Doors - Custom Doors Houston - Contact Info",
                id: "contactUsImg",
            },
            animation: {
                arrow: "wow fadeInLeft slow",
                image: "wow fadeInRight slow",
            },
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