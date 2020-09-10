const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mirabellaDoors"
);

const imageSeed = [
    {
        src: "test1",
        alt: "test2",
        imgName: "test3",
        date: new Date(Date.now())
    }
];

db.Image
  .remove({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
      console.log(data.result.n + " records inserted.");
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  });