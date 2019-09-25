$(document).ready(function() {

    // NavBar
    //=====================================================================
    // $(".nav-link").on("click", function(){
    //     // console.log("clicked");
    //     $(".nav .nav-item").find(".active").removeClass("active");
    //     $(this).addClass("active");
    //  });

    // Lightcase
    //=====================================================================
    $('a[data-rel^=lightcase]').lightcase({
        maxWidth: 450,
        maxHeight: 700,
    });

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


    // Button Clicks for Smooth Scroll Effect
    //=====================================================================
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

