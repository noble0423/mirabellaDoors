require("dotenv").config();
const axios = require("axios");

// Import Keys
const keys = require("../../../keys");

// gMaps
const gMaps = keys.googleMaps;

// This will end up being an AJAX call that will loop through images and assign them to variables in order to pass them into hbsInfo.

const featuredImagesArray = [
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/Blaze.jpeg",
        design: "Blaze",
        alt: "Best Selling Custom Door - Traditional - Mirabella Doors - Houston - Design: Blaze",
        animation: "wow zoomIn",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/Bellaire.jpeg",
        design: "Bellaire",
        alt: "Best Selling Custom Door - Traditional - Mirabella Doors - Houston - Design: Bellaire",
        animation: "wow zoomIn delay-tenths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/tinified/Cosmopolitan-Front-Entry-Doors-cropped-and-resized.jpg",
        design: "Cosmopolitan (Front Entry Doors)",
        alt: "Best Selling Custom Door - Traditional - Mirabella Doors - Houston - Design: Cosmopolitan (Front Entry Doors)",
        animation: "wow zoomIn delay-twentieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/Miramar-Design.jpeg",
        design: "Miramar",
        alt: "Best Selling Custom Door - Traditional - Mirabella Doors - Design: Miramar",
        animation: "wow zoomIn delay-thirtieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0008-Edit.jpeg",
        design: "Kendall",
        alt: "Best Selling Custom Door - Traditional - Mirabella Doors - Design: Kendall",
        animation: "wow zoomIn delay-fortieths",
    },
]

// Empty Arrays for the Featured Images on the home page (MD screens and up)
const topRowFeaturedImagesArray = [];
const bottomRowFeaturedImagesArray = [];

// Empty Arrays for the Featured Images on the home page (XS and SM screens)
const topRowFeaturedImagesArraySm = [];
const middleRowFeaturedImagesArraySm = [];
const bottomRowFeaturedImagesArraySm = [];

// Empty Arrays for the Images Components used on multiple pages
let topRowImgArray = [[],[{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0008-Edit.jpeg",
    design: "Kendall (full light)",
    glass: "Flemish",
    alt: "small image alt test1",
    animation: "wow fadeIn slow",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0017-Edit.jpeg",
    design: "Reagan (with lower metal panel)",
    glass: "Flemish",
    alt: "small image alt test2",
    animation: "wow fadeIn slow delay-tenths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9774-Edit.jpeg",
    design: "Montreal (full light with leaves)",
    glass: "Clear",
    alt: "small image alt test3",
    animation: "wow fadeIn slow delay-fifteenths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9805-Edit.jpeg",
    design: "Coronado (decorative lower metal panel)",
    glass: "Flemish",
    alt: "small image alt test4",
    animation: "wow fadeIn slow delay-twentieths",
}]];
const bottomRowImgArray = [[],[{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9874-Edit.jpeg",
    design: "Bellagio (full light)",
    glass: "Flemish",
    alt: "small image alt test5",
    animation: "wow fadeIn slow delay-quarters",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_exterior_detail.jpeg",
    design: "Reagan (full light)",
    glass: "Clear",
    alt: "small image alt test6",
    animation: "wow fadeIn slow delay-thirtieths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_interior_door.jpeg",
    design: "Reagan (full light, interior view)",
    glass: "Clear",
    alt: "small image alt test7",
    animation: "wow fadeIn slow delay-thirty-fifths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/6142WP_Front_Doors_(no_transom).jpeg",
    design: "Orleans (full light)",
    glass: "Clear",
    alt: "small image alt test8",
    animation: "wow fadeIn slow delay-fortieths",
}]];

const hbsInfo = {

    // Home Page Handlebars Info
    //===============================================================================
    homePage: {
        pageBreakerText: { 
            text: "Mirabella Doors offers elegant, functional, custom wrought iron front entry doors, wine room gates, and wine room doors. Whether you are building a new home or updating your existing home, Mirabella Doors can help you create a beautiful, upscale entry way that compliments both your personal style and the style of your home.",
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
            imgAnimation: "wow fadeIn slow",
            divAnimation: "wow slideInLeft",
            textAnimation: "wow fadeIn slow",
            customerinfoAnimation: "wow fadeIn slower",
            reviews: [
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/customer_review_home.jpeg",
                    alt: "customer review img 1",
                    text: "Mirabella Doors is one of the best custom wrought iron door companies in Houston! Their attention to detail and customer service is outstanding. I am extremely pleased with my door and ALL the doors they have installed on my projects. I highly recommend them.",
                    name: "Claudia P.",
                    area: "The Museum District",
                },
            ],
        },
        customerReviewRight: {
            imgAnimation: "wow fadeIn slow",
            divAnimation: "wow slideInRight",
            textAnimation: "wow fadeIn slow",
            customerinfoAnimation: "wow fadeIn slower",
            reviews: [
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/customer_review_img_clearbrook.jpeg",
                    alt: "customer review img 2",
                    text: "I have used Mirabella Doors for 2 houses that I had built in the last 2 years. The doors were so nice that I had Pam install one on my house this year. Pam is very easy to work with. The doors came out great. My customers were very happy with the custom doors and so was I. I will definitely use Mirabella Doors on my next project.",
                    name: "Yagnesh P.",
                    area: "Vintage Park",
                },
            ],
        },
    },

    // Mirabella Difference Page Handlebars Info
    //===============================================================================
    mbDiffPage: {
        heroComponent: {
            title: "The Mirabella Difference",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/Clearbrook-018.jpg",
                alt: "The Mirabella Difference - Houston's Premier Custom Doors Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/Clearbrook-018.jpg",
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
                    "Our mission at Mirabella Doors is to bring high traditional, hand forged wrought iron doors as well as contemporary steel doors and windows to the market place at a competitive price with superior customer service. Our commitment to excellence begins with design selection and ends when the door is completely installed and the home owner or home builder is satisfied.",

                    "At Mirabella Doors, we understand construction schedules and recognize the importance in delivering the product on time, every time. Our motto is “you only have one chance to make a first impression”. Mirabella Doors keeps this in mind as we work seamlessly with builders, designers and architects. As a company and partner with your builder, Mirabella Doors will impress with the thoughtfulness and attention to detail that befits an elegant home and high quality builder. As a product, Mirabella doors will deliver a lifetime of first impressions with elegant and timeless designs and an enduring product."
                ],
                bkgrndColor: "rgb(255, 254, 247)",
                id: "mirabellaDifferenceText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/mirabella_difference_piano_room.jpg",
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
                id: "meetTheOwnerText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/pam-mirabella_doors_houston.jpg",
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
                darken: "linear-gradient(-45deg, rgba(255, 254, 247, 0.5) 0%, rgba(100, 100, 100, 0.8) 65%)",
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
                darken: "linear-gradient(-45deg, rgba(255, 254, 247, 0.5) 0%, rgba(100, 100, 100, 0.8) 65%)",
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
        heroComponent: {
            title: "Contemporary Doors",
            subText: "Transitional, on trend, and timeless.  The Cosmopolitan design is stunning.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/WMain-007.jpg",
                alt: "Mirabella Doors - Contemporary Doors Banner Image - Greater Houston",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/WMain-007.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        imagesComponentRight: {
            largeImage: [],
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
        heroComponent: {
            title: "Traditional Iron Doors",
            subText: "Elegant, functional, hand-forged by artisans.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/trad_door_hero_banner.jpg",
                alt: "Mirabella Doors - Traditional Doors Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/xs_trad_door_hero_banner.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        imagesComponentRight: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        scrollTopBtn: {
            href: "#traditional-doors-scroll",
        },
    },

    // Pivot Doors Page Handlebars Info
    //===============================================================================
    pivotDoorsPage: {
        heroComponent: {
            title: "Pivot Doors",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/Cosmo SDFS.jpg",
                alt: "Mirabella Doors - High Quality Custom Door Finishes Banner Image",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        imagesComponentRight: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: topRowImgArray,
                bottomRow: bottomRowImgArray,
            },
        },
        scrollTopBtn: {
            href: "#pivot-doors-scroll",
        },
    },

    // Wine Room Doors Page Handlebars Info
    //===============================================================================
    wineRoomDoorsPage: {
        heroComponent: {
            title: "Wine Room Doors",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/trad_door_wine_door_stairwell.jpg",
                alt: "Mirabella Doors - Wine Room/Wine Cellar Doors Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/door_handles_up_close.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        // imagesComponentLeft: {
        //     largeImage: [],
        //     smallImage: {
        //         // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
        //         topRow: [],
        //         bottomRow: [],
        //     },
        // },
        imagesComponentRight: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        scrollTopBtn: {
            href: "#wine-room-doors-scroll",
        },
    },

    // Door Finishes Page Handlebars Info
    //===============================================================================
    doorFinishesPage: {
        heroComponent: {
            title: "Beautiful Finishes",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/door_handles_up_close.jpg",
                alt: "Mirabella Doors - High Quality Custom Door Finishes Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/door_handles_up_close.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        imagesComponentRight: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        scrollTopBtn: {
            href: "#door-finishes-scroll",
        },
    },

    // Door Design Library Page Handlebars Info
    //===============================================================================
    doorDesignLibPage: {
        heroComponent: {
            title: "Door Design Library",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            // image: "https://via.placeholder.com/1650x600/87ceeb?text=Hero+Banner+Component+(banner+-+)",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/architect-back-black-and-white-1496141.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/Lady_laptop.jpg",
                alt: "Mirabella Doors - Door Design Library Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/xs_architect-back-black-and-white-1496141.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        imagesComponentRight: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        scrollTopBtn: {
            href: "#door-design-library-scroll",
        },
    },

    // Balconies and Railing Handlebars Info
    //===============================================================================
    balcAndRailPage: {
        heroComponent: {
            title: "Balconies and Railings",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/railing_up_close.jpg",
                alt: "Mirabella Doors - Custom Balconies and Railings Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/xs_railing_up_close.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        imagesComponentLeft: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        imagesComponentRight: {
            largeImage: [],
            smallImage: {
                // topRowImgArray and bottomRowImgArray are variables created outside of hbsInfo object (this data will be grabbed from db later)
                topRow: [],
                bottomRow: [],
            },
        },
        scrollTopBtn: {
            href: "#balconies-and-railings-scroll",
        },
    },

    // Testimonials Page Handlebars Info
    //===============================================================================
    testimonialsPage: {
        heroComponent: {
            title: "Testimonials",
            subText: "Transitional, on trend, and timeless.  The Cosmopolitan design is stunning.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/talkOnPhone.jpg",
                alt: "Mirabella Doors - Testimonials and Customer Reviews Banner Image - Greater Houston",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/WMain-007.jpg",
            },
        },
        pageBreakerText: {
            text: "Page Breaker Text - Actually jianbing paleo seitan biodiesel poutine subway tile raclette. Stumptown pickled messenger bag, gentrify tumeric glossier sartorial VHS blog tumblr live-edge. Mustache poke twee hoodie mlkshk flannel. Leggings irony shoreditch helvetica copper mug beard jianbing ethical gluten-free. Cliche +1 succulents paleo freegan affogato kickstarter chambray cardigan 8-bit tacos vaporware artisan shaman. Heirloom shaman bushwick cloud bread narwhal mixtape normcore thundercats VHS keytar stumptown vinyl godard. Cold-pressed celiac fixie keytar master cleanse.",
            animation: "wow zoomInDown slow",
        },
        customerReviewLeft: {
            imgAnimation: "wow fadeIn slow",
            divAnimation: "wow slideInLeft",
            textAnimation: "wow fadeIn slow",
            customerinfoAnimation: "wow fadeIn slower",
            reviews: [
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/DDFA Emerson LMP.jpg",
                    alt: "customer review img 1",
                    bkgrndColorClass: "transparent",
                    text: "Mirabella Doors are wonderful to work with. Pam, the owner, is fabulous and VERY helpful. She designed the doors we had in mind and they looked perfect for our home in Spring, TX. When we built our second home, we requested Mirabella Doors. We are just as pleased with these doors as we were with the first set. Even the service after is fabulous! HIGHLY RECOMMENDED!!! - TWICE :)",
                    name: "Carol B.",
                    area: "Spring, TX",
                },
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/DDFA_Bordeaux2.jpg",
                    alt: "customer review img 2",
                    bkgrndColorClass: "white",
                    text: "We had wine doors and front doors made.  We gave them only a rough idea of what we wanted and they created the perfect doors!  We get compliments from everyone that sees them.  Great staff and the installation crew was awesome! Couldn't be more happy with Mirabella Doors!",
                    name: "Tammy M.",
                    area: "Greater Houston",
                },
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/brandon_way_1.jpg",
                    alt: "customer review img 3",
                    bkgrndColorClass: "transparent",
                    text: "Surpassed everything we expected from start to finish!!! Thank you Pam and team for an amazing job well done!!!",
                    name: "Karen P.",
                    area: "Houston",
                },
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/DDST_Cosmopolitan_Tipler.jpg",
                    alt: "customer review img 4",
                    bkgrndColorClass: "white",
                    text: "We are so pleased with our doors and the customer service provided by the company.  Pam was very helpful with the design, the doors are beautiful and we have received many compliments on them.",
                    name: "J. David Reeves",
                    area: "Houston",
                },
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/DDST&T_Ellis_LMP.jpg",
                    alt: "customer review img 5",
                    bkgrndColorClass: "transparent",
                    text: "Beautiful work and easy to work with. Had my front door replaced recently and everyone that comes to my house tells me how gorgeous the door looks. Highly recommend Pam!",
                    name: "Raj",
                    area: "Houston",
                }
            ],
        },
        customerReviewRight: {
            imgAnimation: "wow fadeIn slow",
            divAnimation: "wow slideInRight",
            textAnimation: "wow fadeIn slow",
            customerinfoAnimation: "wow fadeIn slower",
            reviews: [
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/919_Dining_(exterior).jpg",
                    alt: "customer review img 2",
                    bkgrndColorClass: "transparent",
                    text: "We have had the pleasure of working with Mirabella Doors for many years building custom homes and remodels in Houston.  The doors are gorgeous and Pam has always stood behind her product.  We highly recommend Mirabella Doors.",
                    name: "Tammy P.",
                    area: "Houston, TX",
                }, 
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/Mirabella_Doors_110923_13.jpeg",
                    alt: "customer review img 1",
                    bkgrndColorClass: "white",
                    text: "We love our new doors!  They are unique, beautiful, and are perfect for our home.  Pam helped us choose the design that went with our home, and the installation was seamless.  We have gotten many compliments on the doors, and I love being able to open the glass and have have the breeze blowing through when the weather is nice.",
                    name: "Melinda C.",
                    area: "Greater Houston",
                },               
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/SDWFS_Comopolitan_(exterIor_shot).jpg",
                    alt: "customer review img 3",
                    bkgrndColorClass: "transparent",
                    text: "Mirabella Doors changed my front door to a BEAUTIFUL wrought iron door a couple of months ago.  They helped me fully customize the design and their installation was flawless!  The installers were VERY careful with my entryway and made sure the work was completed to my satisfaction and with minimal disruption.  My only regret is not having had it done sooner!",
                    name: "Candida W.",
                    area: "Greater Houston",
                },                
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/919_Dining_&_Wine2.jpg",
                    alt: "customer review img 4",
                    bkgrndColorClass: "white",
                    text: "My fiance and I had the best experience with Mirabella Doors. Aside from the most important fact that the doors look absolutely gorgeous and really complement the front of our stucco home, Pam was a pleasure to work with and it was a smooth process from start to finish. Highly recommend Mirabella Doors.",
                    name: "Mark L.",
                    area: "Houston",
                },
                {
                    src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/close_up_pull_handles2.jpg",
                    alt: "customer review image 5",
                    bkgrndColorClass: "transparent",
                    text: "Beautiful doors & amazing customer service.   Needed a service 4 years later and they came out and fixed it the next day under warranty!",
                    name: "Deema A.",
                    area:"Galveston, TX",
                }
            ],
        },
        scrollTopBtn: {
            href: "#testimonials-scroll",
        },
    },

    // Contact Us Page Handlebars Info
    //===============================================================================
    contactUsPage: {
        heroComponent: {
            title: "Contact Us Today!",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/contact_us_meeting_image.jpg",
                alt: "Mirabella Doors - Expertly Crafted Custom Doors - Contact Us Banner Image",
            },
        },
        xsHeroComponent: {
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/xs_contact_us_meeting_image.jpg",
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
                id: "contactUsEmailText",
            },
            image: {
                // src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/Mirabella_Doors_111005_30.jpeg",
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/contact_us_front-door_dusk.jpg",
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
                    "*** Although we gladly welcome walk-ins, we may be on-site assisting customers.  We highly recommend making an appointment.",
                ],
                bkgrndColor: "rgb(255, 254, 247)",
                id: "contactUsText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/Cosmopolitan DDT.jpg",
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
                darken: "linear-gradient(-45deg, rgba(255, 254, 247, 0.5) 0%, rgba(100, 100, 100, 0.8) 65%)",
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
                darken: "linear-gradient(-45deg, rgba(255, 254, 247, 0.5) 0%, rgba(100, 100, 100, 0.8) 65%)",
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
        googleMapsApi: {
            width: "100%",
            height: "600",
            key: gMaps.secret,
        },
        scrollTopBtn: {
            href: "#contact-us-scroll",
        },
    },

};

module.exports = hbsInfo;