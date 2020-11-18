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
    // axios.get("https://still-sea-30628.herokuapp.com/api/contemporary")
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
    // axios.get("https://still-sea-30628.herokuapp.com/api/traditional")
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
    // axios.get("https://still-sea-30628.herokuapp.com/api/finishes")
    .then(function(res) {
        filterHold = res.data.filter(index => index.size == "small");
        largeImageArr = res.data.filter(index => index.size == "large");

        if (largeImageArr.length === 1) {
            largeImageArr.unshift({});
        }
        
        modulusSort(filterHold);

        topRowAggregate.unshift({});
        botRowAggregate.unshift({});

        hbsInfo.doorFinishesPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        hbsInfo.doorFinishesPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        // hbsInfo.doorFinishesPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        // hbsInfo.doorFinishesPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        hbsInfo.doorFinishesPage.imagesComponentLeft.largeImage = largeImageArr;
        // hbsInfo.doorFinishesPage.imagesComponentRight.largeImage = largeImageArr;
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
    // axios.get("https://still-sea-30628.herokuapp.com/api/cad")
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
    // axios.get("https://still-sea-30628.herokuapp.com/api/balcAndRail")
    .then(function(res) {
        filterHold = res.data.filter(index => index.size == "small");
        largeImageArr = res.data.filter(index => index.size == "large");

        if (largeImageArr.length === 1) {
            largeImageArr.unshift({});
        }

        modulusSort(filterHold);

        topRowAggregate.unshift({});
        botRowAggregate.unshift({});
        hbsInfo.balcAndRailPage.imagesComponentLeft.smallImage.topRow = topRowAggregate;
        hbsInfo.balcAndRailPage.imagesComponentLeft.smallImage.bottomRow = botRowAggregate;
        // hbsInfo.balcAndRailPage.imagesComponentRight.smallImage.topRow = topRowAggregate;
        // hbsInfo.balcAndRailPage.imagesComponentRight.smallImage.bottomRow = botRowAggregate;
        hbsInfo.balcAndRailPage.imagesComponentLeft.largeImage = largeImageArr;
        // hbsInfo.balcAndRailPage.imagesComponentRight.largeImage = largeImageArr;
    }).then(function(res) {
        topRow=[];
        botRow=[];
        topRowAggregate=[];
        botRowAggregate=[];
        largeImageArr=[];

        // console.log("hbsInfo.balcAndRailPage.imagesComponentLeft.largeImage", hbsInfo.balcAndRailPage.imagesComponentLeft.largeImage)
        // console.log("hbsInfo.balcAndRailPage.imagesComponentLeft.largeImage", hbsInfo.balcAndRailPage.imagesComponentLeft.largeImage)
        // console.log("hbsInfo.balcAndRailPage.imagesComponentLeft.smallImage.topRow", hbsInfo.balcAndRailPage.imagesComponentLeft.smallImage.topRow)
        // console.log("hbsInfo.balcAndRailPage.imagesComponentLeft.smallImage.bottomRow", hbsInfo.balcAndRailPage.imagesComponentLeft.smallImage.bottomRow)

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

// router.post("/assets/php/contactForm.php", function(req, res) {
//     console.log(req.url);
//     console.log(req.body);
//     res.status(200);
//     res.send("route is being hit");
// })

router.get("*", function(req, res) {
    res.render("404");
});

module.exports= router;