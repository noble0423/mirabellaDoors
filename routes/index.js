//const path = require("path");
const router = require("express").Router();
const Image = require("../models/Image")

router.get('/', function(req, res, next) {
    Image.find(function(err, content) {
        console.log(content);
        res.render('index', {title: 'Images Loadout', contents: content});
    });
});

module.exports = router;