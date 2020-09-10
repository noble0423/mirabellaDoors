const router = require("express").Router();
const apiController = require("../../controller/apiController");

router.route("/")
  .get(apiController.getDB)

module.exports = router;