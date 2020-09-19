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
        if ((i+1)%8 === 0){
            topRowAggregate.push(topRow);
            botRowAggregate.push(botRow);
            topRow = [];
            botRow = [];
        }
    }
}

let hbsCont = {
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
        
    }).then(function(res) {
        partition.render("contemporaryDoors", hbsInfo.contDoorsPage);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    })
});

router.get("/traditionaldoors", function(req, res) {
    let partition = res;

    axios.get('http://localhost:3000/api/traditional')
    .then(function(res) {
        // console.log(res.data);
        modulusSort(res.data);
        hbsInfo.tradDoorsPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        // console.log(topRow)
        // hbsCont.imagesComponentLeft.smallImage.bottomRow = botRow;
        // console.table(topRowAggregate[0]);
        // console.table(botRowAggregate);
    }).then(function(res) {
        topRow=[];
        botRow=[];
        partition.render("traditionalDoors", hbsInfo.tradDoorsPage);
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