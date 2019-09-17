$(document).ready(function() {

    // NavBar
    //=====================================================================
    // $(".nav-link").on("click", function(){
    //     // console.log("clicked");
    //     $(".nav .nav-item").find(".active").removeClass("active");
    //     $(this).addClass("active");
    //  });


    // iLightbox
    //=====================================================================
    // $('a[data-lightbox-gallery]').on("click", function() {
    //     console.log("clicked");
    // });

    $('a[data-lightbox-gallery]').iLightbox({
        type: 'image', //'image', 'inline', 'ajax', 'iframe', 'swf' and 'html'
        loop: true,
        arrows: true,
        closeBtn: true,
        title: null,
        href: null,
        content: null,
        beforeShow: function(a, b){ },
        onShow: function(a, b){ },
        beforeClose: function(){ },
        afterClose: function(){ },
        onUpdate: function(a){ },
        template: {
			container: '<div class="iLightbox-container"></div>',
			image: '<div class="iLightbox-media"></div>',
			iframe: '<div class="iLightbox-media iLightbox-iframe"></div>',
			title: '<div class="iLightbox-details"></div>',
			error: '<div class="iLightbox-error">The requested content cannot be loaded.<br/>Please try again later.</div>',
			closeBtn: '<a href="#" class="iLightbox-close"></a>',
			prevBtn: '<div class="iLightbox-btnPrev"><a href="javascript:;"></a></div>',
			nextBtn: '<div class="iLightbox-btnNext"><a href="javascript:;"></a></div>'
		}
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

});

