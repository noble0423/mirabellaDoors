const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema ({
    src: {type: String, required: true},
    alt: {type: String, required: true},
    imgName: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String, required: true},
    animation: {type: String}
})

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;