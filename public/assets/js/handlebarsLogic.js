// $(document).ready(function(){
//     $.get('/api', function(res){
//         console.log(res);
//     })
// })
require("dotenv").config();
const axios = require("axios");

// Import Keys
const keys = require("../../../keys");

// gMaps
const gMaps = keys.googleMaps;

// This will end up being an AJAX call that will loop through images and assign them to variables in order to pass them into hbsInfo.

const featuredImagesArray = [
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/tinified/CM1A9908-cropped-and-resized.JPG",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 1",
        animation: "wow zoomIn",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/tinified/After-Picture-cropped-and-resized.JPG",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 2",
        animation: "wow zoomIn delay-tenths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/tinified/Cosmopolitan-Front-Entry-Doors-cropped-and-resized.jpg",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 3",
        animation: "wow zoomIn delay-twentieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/tinified/Miramar-Design-cropped-and-resized.JPG",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 4",
        animation: "wow zoomIn delay-thirtieths",
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/featuredProducts/tinified/Kinley-Design-cropped-and-resized.jpg",
        design: "Featured Door Name",
        glass: "Glass Type",
        alt: "featured door image 5",
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
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/Traditional_resized_small/2_pleasant_wine_room_door.jpg",
    design: "Kendall (full light)",
    glass: "Flemish",
    alt: "small image alt test1",
    animation: "wow fadeIn slow",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0017-Edit.jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/Traditional_resized_small/DDBT&T_Montereal_LMP.jpg",
    design: "Reagan (with lower metal panel)",
    glass: "Flemish",
    alt: "small image alt test2",
    animation: "wow fadeIn slow delay-tenths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9774-Edit.jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/Traditional_resized_small/DDBT&T_Sophie_w_LMP2.jpg",
    design: "Montreal (full light with leaves)",
    glass: "Clear",
    alt: "small image alt test3",
    animation: "wow fadeIn slow delay-fifteenths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9805-Edit.jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/Traditional_resized_small/DDEB_Bellagio_LMP.jpg",
    design: "Coronado (decorative lower metal panel)",
    glass: "Flemish",
    alt: "small image alt test4",
    animation: "wow fadeIn slow delay-twentieths",
}]];
const bottomRowImgArray = [[],[{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9874-Edit.jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/Traditional_resized_small/DDEB_Cosmo_Wide_LMP.jpg",
    design: "Bellagio (full light)",
    glass: "Flemish",
    alt: "small image alt test5",
    animation: "wow fadeIn slow delay-quarters",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_exterior_detail.jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/2_pleasant_front_exterior_detail.jpeg",
    design: "Reagan (full light)",
    glass: "Clear",
    alt: "small image alt test6",
    animation: "wow fadeIn slow delay-thirtieths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_interior_door.jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/2_pleasant_front_interior_door.jpeg",
    design: "Reagan (full light, interior view)",
    glass: "Clear",
    alt: "small image alt test7",
    animation: "wow fadeIn slow delay-thirty-fifths",
},
{
    src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/6142WP_Front_Doors_(no_transom).jpeg",
    // src: "/assets/images/mirabellaDoorsImgs/traditionalDoors/6142WP_Front_Doors_(no_transom).jpeg",
    design: "Orleans (full light)",
    glass: "Clear",
    alt: "small image alt test8",
    animation: "wow fadeIn slow delay-fortieths",
}]];

// Helper Function to loop through image arrays and assign to top and bottom rows arrays
// function imgArrayLoop(array, numPerRow, newTopRowArray, newBottomRowArray) {

//     for (let i = 0; i < array.length; i++) {
//         if (i < numPerRow) {
//             newTopRowArray.push(array[i]);
//         }
//         else {
//             newBottomRowArray.push(array[i]);
//         }
//     };
// }

// imgArrayLoop(featuredImagesArray, 3, topRowFeaturedImagesArray, bottomRowFeaturedImagesArray)
// imgArrayLoop(testImageArray, 4, topRowImgArray, bottomRowImgArray);

// Helper function to loop through image arrays and assign to top, middle and bottom rows arrays
// function imgArrayLoopOddNumImgs(array, numPerRow, newTopRowArray, newMiddleRowArray, newBottomRowArray) {

//     for (let i = 0; i < array.length; i++) {
//         if (i < numPerRow) {
//             newTopRowArray.push(array[i]);
//         }
//         else if (i >= numPerRow && i < (numPerRow * 2)) {
//             newMiddleRowArray.push(array[i]);
//         }
//         else {
//             newBottomRowArray.push(array[i]);
//         }
//     };    
// }

// imgArrayLoopOddNumImgs(featuredImagesArray, 2, topRowFeaturedImagesArraySm, middleRowFeaturedImagesArraySm, bottomRowFeaturedImagesArraySm);


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
            img: {
                animation: "wow fadeIn slow",
                src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/customer_review_home.jpeg",
                alt: "customer review img 1",
            },
            review: {
                divAnimation: "wow slideInLeft",
                wording: {
                    animation: "wow fadeIn slow",
                    text: "Mirabella Doors is one of the best custom wrought iron door companies in Houston! Their attention to detail and customer service is outstanding. I am extremely pleased with my door and ALL the doors they have installed on my projects. I highly recommend them.",
                },
                customerInfo: {
                    animation: "wow fadeIn slower",
                    name: "Claudia P.",
                    area: "The Museum District",
                },
            },
        },
        customerReviewRight: {
            review: {
                divAnimation: "wow slideInRight",
                wording: {
                    animation: "wow fadeIn slow",
                    text: "I have used Mirabella Doors for 2 houses that I had built in the last 2 years. The doors were so nice that I had Pam install one on my house this year. Pam is very easy to work with. The doors came out great. My customers were very happy with the custom doors and so was I. I will definitely use Mirabella Doors on my next project.",
                },
                customerInfo: {
                    animation: " wow fadeIn slower",
                    name: "Yagnesh P.",
                    area: "Vintage Park",
                },
            },
            img: {
                animation: "wow fadeIn slow",
                src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/customer_review_img_clearbrook.jpeg",
                alt: "customer review img 2",
            },
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
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/Cosmo SDFS.jpg",
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
            text: `"Mirabella Doors are wonderful to work with. Pam, the owner, is fabulous and VERY helpful. She designed the doors we had in mind and they looked perfect for out home in Spring, TX. When my husband retired and we moved a bit away from the Houston area, we had our home built on family property and requested Mirabella Doors on the new home. We are just as pleased with these doors as we were with the first set. Even the service after is fabulous! HIGHLY RECOMMENDED!!!"`,
            custName: "- Carol B.",
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
                // bkgrndColor: "#f5f5f5",
                // bkgrndColor: "rgb(255,253,240)",
                // bkgrndColor: "#f6f0ea",
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
                // darken: "linear-gradient(45deg, rgba(50, 50, 50, 0.5) 0%, rgba(100, 100, 100, .5) 80%)",
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
                // darken: "linear-gradient(45deg, rgba(75, 75, 75, 0.4) 0%, rgba(125, 125, 125, .4) 80%)",
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
            text: '"We love our new doors!  They are unique, beautiful, and are perfect for our home.  Pam helped us choose the design that went with our home, and the installation was seamless.  We have gotten many compliments on the doors, and I love being able to open the glass and have have the breeze blowing through when the weather is nice."',
            custName: "- Melinda C.",
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
            title: "Traditional Doors",
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
            text: '"Mirabella Doors changed my front door to a BEAUTIFUL wrought iron door.  They helped me fully customize the design and their installation was flawless!  The installers were VERY careful with my entryway and made sure the work was completed to my satisfaction and with minimal disruption.  My only regret is not having had it done sooner!"',
            custName: "- Candida W.",
            animation: "wow zoomInDown slow",
        },
        // customerReviewLeft: {
        //     img: {
        //         animation: "wow fadeIn slow",
        //         src: "/assets/images/mirabellaDoorsImgs/customerReviews/tinified/customer_review_home.jpeg",
        //         alt: "customer review img 1",
        //     },
        //     review: {
        //         divAnimation: "wow slideInLeft",
        //         wording: {
        //             animation: "wow fadeIn slow",
        //             text: "Lomo freegan normcore pok pok listicle health goth taxidermy slow-carb pinterest beard microdosing pour-over. Crucifix fam four dollar toast gluten-free, schlitz pour-over DIY gochujang hell of tousled taxidermy godard snackwave whatever sartorial. Enamel pin palo santo asymmetrical offal ennui. Kickstarter cardigan vexillologist viral, keffiyeh tbh tousled retro kogi man bun.",
        //         },
        //         customerInfo: {
        //             animation: "wow fadeIn slower",
        //             name: "Ryan N.",
        //             area: "The Museum District",
        //         },
        //     },
        // },
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

    // Door Finishes Page Handlebars Info
    //===============================================================================
    doorFinishesPage: {
        heroComponent: {
            title: "Beautiful Finishes",
            subText: "Write something here like a tagline, selling point, business stat, or something to intro the page.",
            animation: "wow fadeIn slow",
            image: {
                src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/door_handles_up_close.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/grape_cluster_up_close.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/leaves_up_close_warmer.jpg",
                // src: "/assets/images/mirabellaDoorsImgs/hero-component/tinified/leaves_up_close.jpg",
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
            largeImage: [[], [{
                // this will be grabbed from db later
                src: "https://via.placeholder.com/450x700?text=Finishes+IMG+1",
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            }]],
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
            text: '"We are so pleased with our doors and the customer service provided by the company.  Pam was very helpful with the design...the doors are beautiful and we have received many compliments on them."',
            custName: "- J David R.",
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
            largeImage: [[],[{
                // this will be grabbed from db later
                src:"/assets/images/mirabellaDoorsImgs/imagesComponent/Sydney_Gate.jpg",
                alt: [
                    "left test1111",
                    "left test2222",
                ],
                animation: "wow zoomIn",
            }]],
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
            text: '"We have had the pleasure of working with Mirabella Doors for many years building custom homes and remodels in Houston.  The doors are gorgeous and Pam has always stood behind her product.  We highly recommend Mirabella Doors.',
            custName: "- Tammy P.",
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
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/Cosmopolitan DDT.jpg",
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
                // bkgrndColor: "#f5f5f5",
                // bkgrndColor: "rgb(255,253,240)",
                // bkgrndColor: "#ebf2e8",
                id: "contactUsText",
            },
            image: {
                src: "/assets/images/mirabellaDoorsImgs/arrowComponent/tinified/contact_us_front-door_dusk.jpg",
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
                // darken: "linear-gradient(45deg, rgba(50, 50, 50, 0.5) 0%, rgba(100, 100, 100, .5) 80%)",
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
                // darken: "linear-gradient(45deg, rgba(75, 75, 75, 0.4) 0%, rgba(125, 125, 125, .4) 80%)",
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