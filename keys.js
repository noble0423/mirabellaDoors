console.log("keys loaded?");

const check = function() {
    console.log("keys.js is being loaded");
}

exports.googleMaps = {
    secret: process.env.API_KEY
}