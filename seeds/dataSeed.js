const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mirabellaDoors"
);

const imageSeed = [
    {
        src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "for",
        imgName: "connection",
        category: "Contemporary",
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
