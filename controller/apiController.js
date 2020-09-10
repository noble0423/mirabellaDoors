const db = require("../models");

module.exports = {
    getDB: function(req, res) {
        db.Image
          .find(req.query)
          .sort({date: -1 })
          .then(dbModel => res.json(dbModel)
          .catch(err => res.status(422).json(err)));
    }
}