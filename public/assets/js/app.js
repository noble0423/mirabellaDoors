$(document).ready(function() {

    // Button Clicks for Page Routing
    //=====================================================================

    // Mirabella Difference Btn
    $(".mirabella-defference-btn").on("click", function() {
        location.href = "/mirabelladifference";
    });

    // Contemporary Doors Btn
    $(".contemporary-doors-btn").on("click", function() {
        location.href = "/contemporarydoors";
    });

    // Traditional Doors Btn
    $(".traditional-doors-btn").on("click", function() {
        location.href = "/traditionaldoors";
    });

    // Door Design Library Btn
    $(".design-library-btn").on("click", function() {
        location.href = "/doordesignlibrary";
    });

    // Finishes Btn
    $(".finishes-btn").on("click", function() {
        location.href = "/doorfinishes";
    });

    // Contact Us Btn
    $(".contact-us-btn").on("click", function() {
        location.href = "/contactus";
    });

});