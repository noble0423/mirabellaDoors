var router = require("express").Router();
var doorsImagesRoutes = require("./doorsImagesAPIRoutes");

router.use("/doorsImages", doorsImagesRoutes);

module.exports = router;