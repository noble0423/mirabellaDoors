// This will end up being an AJAX call that will loop through images and assign them to variables in order to pass them into hbsInfo.

const featuredImagesArray = [
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/CM1A9908-cropped-and-resized.JPG",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 1",
        animation: "wow zoomIn",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/After-Picture-cropped-and-resized.JPG",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 2",
        animation: "wow zoomIn delay-tenths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/Cosmopolitan-Front-Entry-Doors-cropped-and-resized.jpg",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 3",
        animation: "wow zoomIn delay-twentieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/Miramar-Design-cropped-and-resized.JPG",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 4",
        animation: "wow zoomIn delay-thirtieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/Kinley-Design-cropped-and-resized.jpg",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 5",
        animation: "wow zoomIn delay-fortieths",
    },
]

const testImageArray = [
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/_MG_0008-Edit.jpeg",
        design: "Kendall (full light)",
        glass: "Flemish",
        alt: "small image alt test1",
        animation: "wow fadeIn slow",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/_MG_0017-Edit.jpeg",
        design: "Reagan (with lower metal panel)",
        glass: "Flemish",
        alt: "small image alt test2",
        animation: "wow fadeIn slow delay-tenths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/_MG_9774-Edit.jpeg",
        design: "Montreal (full light with leaves)",
        glass: "Clear",
        alt: "small image alt test3",
        animation: "wow fadeIn slow delay-fifteenths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/_MG_9805-Edit.jpeg",
        design: "Coronado (decorative lower metal panel)",
        glass: "Flemish",
        alt: "small image alt test4",
        animation: "wow fadeIn slow delay-twentieths",
    }, 
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/_MG_9874-Edit.jpeg",
        design: "Bellagio (full light)",
        glass: "Flemish",
        alt: "small image alt test5",
        animation: "wow fadeIn slow delay-quarters",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/2_pleasant_front_exterior_detail.jpeg",
        design: "Reagan (full light)",
        glass: "Clear",
        alt: "small image alt test6",
        animation: "wow fadeIn slow delay-thirtieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/2_pleasant_front_interior_door.jpeg",
        design: "Reagan (full light, interior view)",
        glass: "Clear",
        alt: "small image alt test7",
        animation: "wow fadeIn slow delay-thirty-fifths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/6142WP_Front_Doors_(no_transom).jpeg",
        design: "Orleans (full light)",
        glass: "Clear",
        alt: "small image alt test8",
        animation: "wow fadeIn slow delay-fortieths",
    },
];

// Empty Arrays for the Featured Images on the home page (MD screens and up)
const topRowFeaturedImagesArray = [];
const bottomRowFeaturedImagesArray = [];

// Empty Arrays for the Featured Images on the home page (XS and SM screens)
const topRowFeaturedImagesArraySm = [];
const middleRowFeaturedImagesArraySm = [];
const bottomRowFeaturedImagesArraySm = [];

// Empty Arrays for the Images Components used on multiple pages
const topRowImgArray = [];
const bottomRowImgArray = [];

// Helper Function to loop through image arrays and assign to top and bottom rows arrays
function imgArrayLoop(array, numPerRow, newTopRowArray, newBottomRowArray) {

    for (let i = 0; i < array.length; i++) {
        if (i < numPerRow) {
            newTopRowArray.push(array[i]);
        }
        else {
            newBottomRowArray.push(array[i]);
        }
    };
}

imgArrayLoop(featuredImagesArray, 3, topRowFeaturedImagesArray, bottomRowFeaturedImagesArray)
imgArrayLoop(testImageArray, 4, topRowImgArray, bottomRowImgArray);

// Helper function to loop through image arrays and assign to top, middle and bottom rows arrays
function imgArrayLoopOddNumImgs(array, numPerRow, newTopRowArray, newMiddleRowArray, newBottomRowArray) {

    for (let i = 0; i < array.length; i++) {
        if (i < numPerRow) {
            newTopRowArray.push(array[i]);
        }
        else if (i >= numPerRow && i < (numPerRow * 2)) {
            newMiddleRowArray.push(array[i]);
        }
        else {
            newBottomRowArray.push(array[i]);
        }
    };    
}

imgArrayLoopOddNumImgs(featuredImagesArray, 2, topRowFeaturedImagesArraySm, middleRowFeaturedImagesArraySm, bottomRowFeaturedImagesArraySm);

// console.log("top");
// console.log(topRowFeaturedImagesArraySm);
// console.log("middle");
// console.log(middleRowFeaturedImagesArraySm);
// console.log("bottom");
// console.log(bottomRowFeaturedImagesArraySm);

const hbsInfo = {

    // Home Page Handlebars Info
    //===============================================================================
    homePage: {
        pageBreakerText: { 
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        coreValueCards: [
            {
                animation: "wow bounceIn",
                icon: "fas fa-handshake fa-3x",
                title: "Core Value 1",
                description: "Man braid next level actually vegan yr tofu irony master cleanse vape chia flannel. Literally church-key poke pitchfork VHS austin iceland, leggings XOXO butcher.",
            },
            {
                animation: "wow bounceIn delay-fifteenths",
                icon: "fas fa-tools fa-3x",
                title: "Core Value 2",
                description: "Man braid next level actually vegan yr tofu irony master cleanse vape chia flannel. Literally church-key poke pitchfork VHS austin iceland, leggings XOXO butcher.",
            },
            {
                animation: "wow bounceIn delay-thirtieths",
                icon: "fas fa-shipping-fast fa-3x",
                title: "Core Value 3",
                description: "Man braid next level actually vegan yr tofu irony master cleanse vape chia flannel. Literally church-key poke pitchfork VHS austin iceland, leggings XOXO butcher.",
            },
            {
                animation: "wow bounceIn delay-fortyfifths",
                icon: "fas fa-money-bill fa-3x",
                title: "Core Value 4",
                description: "Man braid next level actually vegan yr tofu irony master cleanse vape chia flannel. Literally church-key poke pitchfork VHS austin iceland, leggings XOXO butcher.",
            },
        ],
        featuredDoors: featuredImagesArray,
        featuredDoorsMdAndLgScreens: {
            topRow: topRowFeaturedImagesArray,
            bottomRow: bottomRowFeaturedImagesArray,
        },
        featuredDoorsSmScreens: {
            topRow: topRowFeaturedImagesArraySm,
            middleRow: middleRowFeaturedImagesArraySm,
            bottomRow: bottomRowFeaturedImagesArraySm,
        },
        featuredDoorsXsScreens: featuredImagesArray,
        scrollTopBtn: {
            href: "#home-scroll",
        },
        customerReviewLeft: {
            img: {
                animation: "wow fadeIn slow",
                src: "/assets/images/mirabellaDoorsImgs/customerReviews/customer_review_home.jpeg",
                alt: "customer review img 1",
            },
            review: {
                divAnimation: "wow slideInLeft",
                wording: {
                    animation: "wow fadeIn slow",
                    text: "Lomo freegan normcore pok pok listicle health goth taxidermy slow-carb pinterest beard microdosing pour-over. Crucifix fam four dollar toast gluten-free, schlitz pour-over DIY gochujang hell of tousled taxidermy godard snackwave whatever sartorial. Enamel pin palo santo asymmetrical offal ennui. Kickstarter cardigan vexillologist viral, keffiyeh tbh tousled retro kogi man bun.",
                },
                customerInfo: {
                    animation: "wow fadeIn slower",
                    name: "Ryan N.",
                    area: "The Museum District",
                },
            },
        },
        customerReviewRight: {
            review: {
                divAnimation: "wow slideInRight",
                wording: {
                    animation: "wow fadeIn slow",
                    text: "Lomo freegan normcore pok pok listicle health goth taxidermy slow-carb pinterest beard microdosing pour-over. Crucifix fam four dollar toast gluten-free, schlitz pour-over DIY gochujang hell of tousled taxidermy godard snackwave whatever sartorial. Enamel pin palo santo asymmetrical offal ennui. Kickstarter cardigan vexillologist viral, keffiyeh tbh tousled retro kogi man bun.",
                },
                customerInfo: {
                    animation: " wow fadeIn slower",
                    name: "Stephanie N.",
                    area: "Vintage Park",
                },
            },
            img: {
                animation: "wow fadeIn slow",
                src: "/assets/images/mirabellaDoorsImgs/customerReviews/customer_review_img_clearbrook.jpeg",
                alt: "customer review img 2",
            },
        },
    },

    // Mirabella Difference Page Handlebars Info
    //===============================================================================
    mbDiffPage: {

        hbsTestTry1: "you got it man",
        heroComponentLeft: {
            title: "The Mirabella Difference",
            animation: "wow fadeIn slow",
            image: {
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/Cosmo SDFS.jpg",
                src: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
                alt: "The Mirabella Difference - Houston's Premier Custom Doors Banner Image",
            },
        },
        xsHeroComponentLeft: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
            },
        },
        pageBreakerText: { 
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        arrowComponentRight: {
            title: {
                title: "The Mirabella Difference",
                id: "mirabellaDifferenceTitleId"
            },
            wording: {
                paragraphs: [
                    "Our mission at Mirabella Doors is to bring high quality, custom wrought iron doors to the market place at a competitive price with superior customer service. Our commitment to excellence begins with design selection and ends when the door is completely installed and the home owner or home builder is satisfied.",

                    "At Mirabella Doors, we understand construction schedules and recognize the importance in delivering the product on time, every time. Our motto is “you only have one chance to make a first impression”. Mirabella Doors keeps this in mind as we work seamlessly with builders, designers and architects. As a company and partner with your builder, Mirabella Doors will impress with the thoughtfulness and attention to detail that befits an elegant home and high quality builder. As a product, Mirabella doors will deliver a lifetime of first impressions with elegant and timeless designs and an enduring product.",

                    '"First impressions" is not only our motto, it is our specialty!',
                ],
                bkgrndColor: "rgb(255, 254, 247)",
                // bkgrndColor: "rgb(255,253,240)", 
                // bkgrndColor: "#f5f5f5",
                // bkgrndColor: "white",
                // bkgrndColor: "linear-gradient(346deg, rgba(240,255,206,1) 0%, rgba(255,249,222,1) 60%);",
                // bkgrndColor: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(226,240,254,1) 0%, rgba(255,247,228,1) 90% );",
                // bkgrndColor: "radial-gradient( circle farthest-corner at 18.7% 37.8%,  rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% );",
                // bkgrndColor: "radial-gradient( circle 905px at 4.9% 85.8%,  rgba(255,243,242,1) 0.1%, rgba(255,247,220,1) 57.6% );",
                id: "mirabellaDifferenceText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/mirabella_difference_piano_room.jpg",
                alt: "The Mirabella Difference - Mirabella Doors - Custom Doors Houston, TX",
                id: "mirabellaDifferenceImg",
            },
            animation: {
                arrow: "wow fadeInRight slow",
                image: "wow fadeInLeft slow",
            },
        },
        arrowComponentLeft: {
            title: {
                title: "Meet the Owner",
                id: "meetTheOwnerTitleId"
            },
            wording: {
                paragraphs: [
                    "Pam Miller owns and operates Mirabella Doors. She has 15 years in the construction industry, specializing in custom iron entryways for over 10 years.  Pam has always been drawn to the creative aspect of construction and design and works hard to create beautiful, upscale entryways that join the personal taste of the homeowner while staying true to the style of the home.",

                    "Mirabella Doors works very closely with Houston’s finest custom home builders and interior designers.  By consistently providing a high-end, custom product and combining it with exceptional service, Pam Miller, has built a solid reputation in the industry for surpassing customer expectations.",
                ],
                bkgrndColor: "rgb(255, 254, 247)",
                // bkgrndColor: "#f5f5f5",
                // bkgrndColor: "rgb(255,253,240)",
                // bkgrndColor: "#f6f0ea",
                id: "meetTheOwnerText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/pam-mirabella_doors_houston.jpg",
                alt: "Owner - Mirabella Doors - Custom Doors Houston",
                id: "meetTheOwnerImg",
            },
            animation: {
                arrow: "wow fadeInLeft slow",
                image: "wow fadeInRight slow",
            },
        },
        xsArrowTransformRight: {
            backgroundImage: {
                darken: "linear-gradient(45deg, rgba(50, 50, 50, 0.5) 0%, rgba(100, 100, 100, .5) 80%)",
            },
            textDiv: {
                id:"mirabellaDifferenceXSDiv",
            },
            title: {
                id: "mirabellaDifferenceXSTitle",
            },
            wording: {
                id: "mirabellaDifferenceXSText",
            },
        },
        xsArrowTransformLeft: {
            backgroundImage: {
                darken: "linear-gradient(45deg, rgba(75, 75, 75, 0.4) 0%, rgba(125, 125, 125, .4) 80%)",
            },
            textDiv: {
                id: "meetTheOwnerXSDiv",
            },
            title: {
                id: "meetTheOwnerXSTitle",
            },
            wording: {
                id: "meetTheOwnerXSText",
            },
        },
        scrollTopBtn: {
            href: "#mirabella-difference-scroll",
        },
    },

    // Contemporary Doors Page Handlebars Info
    //===============================================================================
    contDoorsPage: {
        heroComponentRight: {
            title: "Stunning Contemporary Doors",
            // image: "/assets/images/mirabellaDoorsImgs/hero-component/Clearbrook-018.jpg",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
                alt: "Mirabella Doors - Contemporary Doors Banner Image - Greater Houston",
            },
        },
        xsHeroComponentRight: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/WMain-007.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Contemporary_Clearbrook.jpg", 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan-Sleek.jpg",
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        imagesComponentRight: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Contemporary_Clearbrook_wine.jpg", 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan Front Entry Doors.jpg"
                ],
                alt: [
                    "right test1111",
                    "right test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        scrollTopBtn: {
            href: "#contemporary-doors-scroll",
        },
    },

    // Traditional Doors Page Handlebars Info
    //===============================================================================
    tradDoorsPage: {
        heroComponentLeft: {
            title: "Breathtaking Traditional Doors",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/trad_door_hero_banner.jpg",
                alt: "Mirabella Doors - Traditional Doors Banner Image",
            },
        },
        xsHeroComponentLeft: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/xs_trad_door_hero_banner.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [ 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Bellagio_DD.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/Madison_full_surround.jpg",
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/trad_stone_topper.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/trad_indoor_rounded.jpg"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        imagesComponentRight: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/trad_outdoor_rounded.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/tall_curved_traditional.jpg", 
                    // "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_rounded_wine.jpg",
                ],
                alt: [
                    "right test1111",
                    "right test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        scrollTopBtn: {
            href: "#traditional-doors-scroll",
        },
    },

    // Door Finishes Page Handlebars Info
    //===============================================================================
    doorFinishesPage: {
        heroComponentRight: {
            title: "Beautiful Finishes",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/door_handles_up_close.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/grape_cluster_up_close.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/leaves_up_close_warmer.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/leaves_up_close.jpg",
                alt: "Mirabella Doors - High Quality Custom Door Finishes Banner Image",
            },
        },
        xsHeroComponentRight: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/door_handles_up_close.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "https://via.placeholder.com/450x700?text=Finishes+IMG+1", 
                    "https://via.placeholder.com/450x700?text=Finishes+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        scrollTopBtn: {
            href: "#door-finishes-scroll",
        },
    },

    // Door Design Library Page Handlebars Info
    //===============================================================================
    doorDesignLibPage: {
        heroComponentLeft: {
            title: "Door Design Library",
            animation: "wow fadeIn slow",
            // image: "https://via.placeholder.com/1650x600/87ceeb?text=Hero+Banner+Component+(banner+-+left)",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/architect-back-black-and-white-1496141.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/Lady_laptop.jpg",
                alt: "Mirabella Doors - Door Design Library Banner Image",
            },
        },
        xsHeroComponentLeft: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/xs_architect-back-black-and-white-1496141.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/showroom_trad.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/pencil_on_CAD_drawing.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/leaves_detail.jpg", 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/showroom_two_doors.jpg",
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                    "left test3333",
                    "left test4444",                                       
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        imagesComponentRight: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/swatch_on_CAD_drawing.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/door_handles_detail.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/showroom_cont_square.jpg",
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/artist_drawing.jpg", 
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/wine_gate_detail.jpg",
                ],
                alt: [
                    "right test1111",
                    "right test2222",
                    "right test3333",
                    "right test4444",
                    "right test5555",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        scrollTopBtn: {
            href: "#door-design-library-scroll",
        },
    },

    // Balconies and Railing Handlebars Info
    //===============================================================================
    balcAndRailPage: {
        heroComponentRight: {
            title: "Balconies and Railings",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/railing_up_close.jpg",
                alt: "Mirabella Doors - Custom Balconies and Railings Banner Image",
            },
        },
        xsHeroComponentRight: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/xs_railing_up_close.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: {
                // this will be grabbed from db later
                src: [
                    "/assets/images/mirabellaDoorsImgs/imagesComponent/Sydney_Gate.jpg", 
                    "https://via.placeholder.com/450x700?text=Large+Railing+IMG+2"
                ],
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            },
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        scrollTopBtn: {
            href: "#balconies-and-railings-scroll",
        },
    },

    // Contact Us Page Handlebars Info
    //===============================================================================
    contactUsPage: {
        heroComponentLeft: {
            title: "Contact Us Today!",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/contact_us_meeting_image.jpg",
                alt: "Mirabella Doors - Expertly Crafted Custom Doors - Contact Us Banner Image",
            },
        },
        xsHeroComponentLeft: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/xs_contact_us_meeting_image.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        arrowComponentRight: {
            title: {
                title: "Send Us an Email",
                id: "sendUsAnEmailTitleId",
            },
            wording: {
                bkgrndColor: "rgb(255, 254, 247)",
                // bkgrndColor: "#f5f5f5",
                // bkgrndColor: "rgb(255,253,240)",
                // bkgrndColor: "#e0f7f4",
                id: "contactUsEmailText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/Cosmopolitan DDT.jpg",
                alt: "Contact Us - Mirabella Doors - Custom Doors Houston, TX",
                id: "contactUsEmailImg",
            },
            animation: {
                arrow: "wow fadeInRight slow",
                image: "wow fadeInLeft slow",
            },
        },
        arrowComponentLeft: {
            title: {
                title: "Contact Info",
                id: "contactUsTitleId",
            },
            wording: {
                paragraphs: [
                    "Disrupt green juice woke, hashtag hot chicken locavore typewriter meggings. Letterpress pabst lomo lumbersexual selvage glossier. Fixie post-ironic snackwave asymmetrical salvia. Stumptown succulents 3 wolf moon, you probably haven't heard of them tilde poutine ramps.",
                    "Mirabella Doors",
                    "The Houston Design Center",
                    "7026 Old Katy Road, Suite 292",
                    "Houston, Texas 77024",
                    "PHONE: (713) 252-6508",
                    "FAX: (713) 513-5935",
                    "HRS OF OPERATION: Mon.-Fri 8:00a-5:00p",
                    "*** We are often on the job site, so while walk-ins are welcome, we cannot guarantee that someone will be here to help. We highly recommend making an appointment.",
                ],
                bkgrndColor: "rgb(255, 254, 247)",
                // bkgrndColor: "#f5f5f5",
                // bkgrndColor: "rgb(255,253,240)",
                // bkgrndColor: "#ebf2e8",
                id: "contactUsText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/contact_us_front-door_dusk.jpg",
                alt: "Contact Mirabella Doors - Custom Doors Houston - Contact Info",
                id: "contactUsImg",
            },
            animation: {
                arrow: "wow fadeInLeft slow",
                image: "wow fadeInRight slow",
            },
        },
        xsArrowTransformRight: {
            backgroundImage: {
                darken: "linear-gradient(45deg, rgba(50, 50, 50, 0.5) 0%, rgba(100, 100, 100, .5) 80%)",
            },
            textDiv: {
                id:"sendUsAnEmailXSDiv",
            },
            title: {
                id: "sendUsAnEmailXSTitle",
            },
            wording: {
                id: "sendUsAnEmailXSText",
            },
        },
        xsArrowTransformLeft: {
            backgroundImage: {
                darken: "linear-gradient(45deg, rgba(75, 75, 75, 0.4) 0%, rgba(125, 125, 125, .4) 80%)",
            },
            textDiv: {
                id: "contactUsXSDiv",
            },
            title: {
                id: "contactUsXSTitle",
            },
            wording: {
                id: "contactUsXSText",
            },
        },
        scrollTopBtn: {
            href: "#contact-us-scroll",
        },
    },

};

module.exports = hbsInfo;