const router = require("express").Router();
const hbsInfo = require("../public/assets/js/handlebarsLogic");
const axios = require("axios");

//section 1
let topRow = [];
let botRow = [];
let topRowAggregate = [];
let botRowAggregate = [];

//section 2
//section 3
//section 4
//section 5
function modulusSort(input) {
    for (i=0; i<input.length; i++){
        if (i%2 === 0 ){
            topRow.push(input[i])
        }else {
            botRow.push(input[i])
        }
        if (i%8 === 0){
            topRowAggregate.push(topRow);
            botRowAggregate.push(botRow);
            topRow = [];
            botRow = [];
        }
    }
}

let hbsCont = {
    heroComponent: {
        title: "Stunning Contemporary Doors",
        // image: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
        animation: "wow fadeIn slow",
        image: {
            src: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
            alt: "Mirabella Doors - Contemporary Doors Banner Image - Greater Houston",
        },
    },
    xsHeroComponent: {
        image: {
            src: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
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
                "/assets/images/mirabellaDoorsImgs/imagesComponent/Contemporary_Clearbrook.jpg", 
                "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan-Sleek.jpg",
            ],
            alt: [
                "left test1111",
                "left test2222",
            ],
            animation: "wow zoomIn",
        },
        smallImage: {
            // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
            topRow: [],
            bottomRow: [],
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
                "right test2222",
            ],
            animation: "wow zoomIn",
        },
        smallImage: {
            // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
            topRow: [],
            bottomRow: [],
        },
    },
    scrollTopBtn: {
        href: "#contemporary-doors-scroll",
    }
}

router.get("/", function(req, res) {
    const hbsObject = hbsInfo.homePage;
    
    res.render("index", hbsObject);
});

router.get("/home", function(req, res) {
    const hbsObject = hbsInfo.homePage;

    res.render("index", hbsObject);
});

router.get("/mirabelladifference", function(req, res) {
    const hbsObject = hbsInfo.mbDiffPage;

    res.render("mirabellaDifference", hbsObject);
});

router.get("/contemporarydoors", function(req, res) {
    let partition = res;

    axios.get('http://localhost:3000/api/contemporary')
    .then(function(res) {
        console.log(res.data);

        // hbsCont.imagesComponentLeft.smallImage.topRow = topRow;
        // hbsCont.imagesComponentLeft.smallImage.bottomRow = botRow;
        // hbsCont.imagesComponentRight.smallImage.topRow = topRow; // change to topRowRight later for non duplicate imagery
        // hbsCont.imagesComponentRight.smallImage.bottomRow = botRow;
    }).then(function(res) {
        partition.render("contemporaryDoors", hbsCont);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    })
});

router.get("/traditionaldoors", function(req, res) {
    let partition = res;

    axios.get('http://localhost:3000/api/traditional')
    .then(function(res) {
        console.log(res.data);
        modulusSort(res.data);
        hbsCont.imagesComponentLeft.smallImage.topRow = topRow;
        hbsCont.imagesComponentLeft.smallImage.bottomRow = botRow;
        console.log(topRowAggregate);
        console.log(botRowAggregate);
    }).then(function(res) {
        topRow=[];
        botRow=[];
        partition.render("traditionalDoors", hbsCont);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    })
});

router.get("/doorfinishes", function(req, res) {
    const hbsObject = hbsInfo.doorFinishesPage;

    res.render("doorFinishes", hbsObject);
});

router.get("/doordesignlibrary", function(req, res) {
    const hbsObject = hbsInfo.doorDesignLibPage;

    res.render("doorDesignLibrary", hbsObject);
});

router.get("/balconiesandrailings", function(req, res) {
    const hbsObject = hbsInfo.balcAndRailPage;

    res.render("balconiesAndRailings", hbsObject);
});

router.get("/contactus", function(req, res) {
    const hbsObject = hbsInfo.contactUsPage;
    
    res.render("contactUs", hbsObject);
});

router.get("*", function(req, res) {
    res.render("404");
});

module.exports= router;