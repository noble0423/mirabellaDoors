const router = require("express").Router();
const hbsInfo = require("../public/assets/js/handlebarsLogic");
const axios = require("axios");

//Sorting mechanism
let filterHold= [];
let topRow = [];
let botRow = [];
let topRowAggregate = [];
let botRowAggregate = [];
let largeImageArr = []

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
        filterHold = res.data.filter(index => index.size == "small");
        largeImageArr = res.data.filter(index => index.size == "large");
        modulusSort(filterHold);
        hbsInfo.contDoorsPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        hbsInfo.contDoorsPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        hbsInfo.contDoorsPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        hbsInfo.contDoorsPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        hbsInfo.contDoorsPage.imagesComponentLeft.largeImage = largeImageArr;
        hbsInfo.contDoorsPage.imagesComponentRight.largeImage = largeImageArr;
    }).then(function(res) {
        topRow=[];
        botRow=[];
        topRowAggregate=[];
        botRowAggregate=[];
        largeImageArr=[];
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
        filterHold = res.data.filter(index => index.size == "small");
        largeImageArr = res.data.filter(index => index.size == "large");
        modulusSort(filterHold);
        hbsInfo.tradDoorsPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        hbsInfo.tradDoorsPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        hbsInfo.tradDoorsPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        hbsInfo.tradDoorsPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        hbsInfo.tradDoorsPage.imagesComponentLeft.largeImage = largeImageArr;
        hbsInfo.tradDoorsPage.imagesComponentRight.largeImage = largeImageArr;
    }).then(function(res) {
        topRow=[];
        botRow=[];
        topRowAggregate=[];
        botRowAggregate=[];
        largeImageArr=[];
        partition.render("traditionalDoors", hbsInfo.tradDoorsPage);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    })
});

//Awaiting confirmation, if exists.
router.get("/doorfinishes", function(req, res) {
    let partition = res;
    //uncomment if db has info, otherwise use Handlebars Logic for static images
    axios.get('http://localhost:3000/api/finishes')
    .then(function(res) {
        // filterHold = res.data.filter(index => index.size == "small");
        // largeImageArr = res.data.filter(index => index.size == "large");
        // modulusSort(filterHold);
        // hbsInfo.doorDesignLibPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentLeft.largeImage = largeImageArr;
        // hbsInfo.doorDesignLibPage.imagesComponentRight.largeImage = largeImageArr;
    }).then(function(res) {
        topRow=[];
        botRow=[];
        topRowAggregate=[];
        botRowAggregate=[];
        largeImageArr=[];
        partition.render("doorFinishes", hbsInfo.doorFinishesPage);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    });
});

router.get("/doordesignlibrary", function(req, res) {
    let partition = res;

    axios.get('http://localhost:3000/api/cad')
    .then(function(res) {
        filterHold = res.data.filter(index => index.size == "small");
        largeImageArr = res.data.filter(index => index.size == "large");
        modulusSort(filterHold);
        hbsInfo.doorDesignLibPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        hbsInfo.doorDesignLibPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        hbsInfo.doorDesignLibPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        hbsInfo.doorDesignLibPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        hbsInfo.doorDesignLibPage.imagesComponentLeft.largeImage = largeImageArr;
        hbsInfo.doorDesignLibPage.imagesComponentRight.largeImage = largeImageArr;
    }).then(function(res) {
        topRow=[];
        botRow=[];
        topRowAggregate=[];
        botRowAggregate=[];
        largeImageArr=[];
        partition.render("doorDesignLibrary", hbsInfo.doorDesignLibPage);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    });
});

//Awaiting confirmation, if exists.
router.get("/balconiesandrailings", function(req, res) {
    let partition = res;
    //uncomment if db has info, otherwise use Handlebars Logic for static images
    axios.get('http://localhost:3000/api/balcAndRail')
    .then(function(res) {
        // filterHold = res.data.filter(index => index.size == "small");
        // largeImageArr = res.data.filter(index => index.size == "large");
        // modulusSort(filterHold);
        // hbsInfo.doorDesignLibPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        // hbsInfo.doorDesignLibPage.imagesComponentLeft.largeImage = largeImageArr;
        // hbsInfo.doorDesignLibPage.imagesComponentRight.largeImage = largeImageArr;
    }).then(function(res) {
        topRow=[];
        botRow=[];
        topRowAggregate=[];
        botRowAggregate=[];
        largeImageArr=[];
        partition.render("balconiesAndRailings", hbsInfo.balcAndRailPage);
    }).catch(function(err){
        res.render("404")
        console.log(err)
    });
});

router.get("/contactus", function(req, res) {
    const hbsObject = hbsInfo.contactUsPage;
    
    res.render("contactUs", hbsObject);
});

router.get("*", function(req, res) {
    res.render("404");
});

module.exports= router;