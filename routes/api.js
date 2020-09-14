//const path = require("path");
const router = require("express").Router();
const db = require("../models")

router.get('/api', function(req, res, next) {
    db.Image.find(function(err, content) {
        // console.log(content);
        res.json(content)
    });
});

module.exports = router;