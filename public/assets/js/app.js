$(document).ready(function() {
    // NavBar
    //=====================================================================
    $(function(){
        const current = location.pathname;

        if (current === "/") {
            $("#start-home-active").addClass("active");
        }

        else {
            $("#navbarNav li a").each(function(){
                const $this = $(this);

                if  (   current === "/contemporarydoors"    || 
                        current === "/traditionaldoors"     || 
                        current === "/doorfinishes"         || 
                        current === "/doordesignlibrary"
                    ) {
                        $("a#navbarDropdown").addClass("active");
                }

                else if ($this.attr("href").indexOf(current) !== -1) {

                    $this.addClass("active");
                }
            });
        }
    });

    //Lazy Load
    $(function() {
        $('img.lazy').lazy();
    });

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
    
    // let observer = new IntersectionObserver(callback, options);

    // observer.observe(target)
    
    var target = document.querySelector("div")
    // if('IntersectionObserver' in window) {
    //     const observer = new IntersectionObserver((target, observer) => {
    //       target.forEach((item) => {
    //         if(item.isIntersecting) {
    //           loadImages(item.target);
    //           observer.unobserve(item.target);
    //         }
    //       });
    //     });
    //     imagesToLoad.forEach((img) => {
    //       observer.observe(img);
    //     });
    //   } else {
    //     imagesToLoad.forEach((img) => {
    //       loadImages(img);
    //     });
    //   }

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

    
    // Reveal Smooth Scroll Btn (component) once Scroll has reached ?px 
    //=====================================================================
    $(function() {
        $(".scroll-up").hide();

        $(window).scroll(function() {
            const scroll = $(window).scrollTop();

            if (scroll >= 500) {
                $(".scroll-up").show();
            }

            else {
                $(".scroll-up").hide();
            }
        });
    });

});

