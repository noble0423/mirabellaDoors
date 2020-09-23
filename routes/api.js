//const path = require("path");
const router = require("express").Router();
const db = require("../models")

router.get('/api/:cat', function(req, res, next) {
    let categorySearch = req.params.cat;
    db.Image.find({category: categorySearch}, function(err, content) {
        // console.log(content);
        res.json(content)
    });
});

module.exports = router;