const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://mirabella:mirabelladoors1@ds361998.mlab.com:61998/mirabella"
);

const imageSeed = [

    // TRADITIONAL DOORS (image size small)
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0008-Edit.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Kendall",
        imgName: "Kendall",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0017-Edit.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9774-Edit.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Montreal",
        imgName: "Montreal",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9805-Edit.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Sienna",
        imgName: "Sienna",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9874-Edit.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_exterior_detail.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_interior_door.jpeg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Reagan (interior)",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_wine_room_door.jpg",
        alt: "Mirabella Doors - Traditional Iron Doors - Design: Pleasant Wine Room",
        imgName: "Pleasant Wine Room",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //8^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/6142WP_Front_Doors_(no_transom).jpeg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: 6142WP Front Doors",
        imgName: "6142WP Front Doors",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDBT&T_Montereal_LMP.jpg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Montreal",
        imgName: "Montreal",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDBT&T_Montereal_LMP2.jpg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Montreal",
        imgName: "Montreal",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDBT&T_Sophie_w_LMP2.jpg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Sophie",
        imgName: "Sophie",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Bellagio_LMP.jpg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Bellaire_(solid).jpeg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Bellaire",
        imgName: "Bellaire",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Bellaire2_(pro shot).jpg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Cosmo_Wide_LMP.jpg",
        alt: "Custom Door Designs - Houston, TX - Iron Door Design and Installation - Design Name: Cosmo Wide",
        imgName: "Cosmo Wide",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //16^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Cosmopolitan_(wide).jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: ",
        imgName: "Cosmopolitan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Hayden_LMP.jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Hayden",
        imgName: "Hayden",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Ravel_LMP.jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Ravel",
        imgName: "Ravel",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Sutton_copy.jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Sutton",
        imgName: "Sutton",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Sutton2.jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Sutton",
        imgName: "Sutton",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Sutton2_copy.jpeg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Sutton",
        imgName: "Sutton",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB_Sydney_(gate).jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Sydney (gate)",
        imgName: "Sydney (gate)",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEB&T_Kelsey_LMP.jpg",
        alt: "Custom Door for Home and Office - Mirabella Doors - Design Name: Kelsey",
        imgName: "Kelsey",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //24^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDEBWT_Versailles.JPG",
        alt: "Houston's Finest Luxury Doors - Design Name: Versailles",
        imgName: "Versailles",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Bellagio.jpeg",
        alt: "Houston's Finest Luxury Doors - Design Name: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Bellaire.jpg",
        alt: "Houston's Finest Luxury Doors - Design Name: Bellaire",
        imgName: "Bellaire",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Bellaire2.jpg",
        alt: "Houston's Finest Luxury Doors - Design Name: Bellaire",
        imgName: "Bellaire",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Bellaire3.jpeg",
        alt: "Houston's Finest Luxury Doors - Design Name: Bellaire",
        imgName: "Bellaire",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Bellaire3.jpg",
        alt: "Houston's Finest Luxury Doors - Design Name: Bellaire",
        imgName: "Bellaire",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Bordeaux.jpg",
        alt: "Houston's Finest Luxury Doors - Design Name: Bordeaux",
        imgName: "Bordeaux",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Cosmopolitan_Wide_LMP.jpeg",
        alt: "Houston's Finest Luxury Doors - Design Name: Cosmopolitan Wide",
        imgName: "Cosmopolitan Wide",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //32^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Emerson.jpg",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Emerson_copy.JPG",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Emerson_LMP.jpeg",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Kinley2.jpg",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Kinley",
        imgName: "Kinley",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Phoenician_LMP.jpeg",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Phoenician",
        imgName: "Phoenician",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFAWFS_Madison_(solid).jpg",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Madison",
        imgName: "Madison",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDSL&T_Reagan_with_LMP.jpg",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Alexander_LMP.JPG",
        alt: "Custom Door Design Experts - Houston, TX - Design Name: Alexander",
        imgName: "Alexander",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //40^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Bellagio.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Bellagio_(inside_view) copy.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Bellagio (inside view)",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Carnivale.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Carnivale",
        imgName: "Carnivale",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Dolce.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Dolce",
        imgName: "Dolce",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Dolce_copy.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Dolce",
        imgName: "Dolce",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Eden.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Eden",
        imgName: "Eden",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Emerson.jpg",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Grayson_LMP.JPG",
        alt: "High Quality Iron Doors - Home and Office - Design Name: Grayson",
        imgName: "Grayson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //48^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Havens2.jpeg",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Havens",
        imgName: "Havens",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Hayden.jpg",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Hayden",
        imgName: "Hayden",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Jane.JPG",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Jane",
        imgName: "Jane",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Kendall.jpg",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Kendall",
        imgName: "Kendall",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_LEWIS_LMP.JPG",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Lewis",
        imgName: "Lewis",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Madeline.jpg",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Madeline",
        imgName: "Madeline",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Montreal.jpg",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Montreal",
        imgName: "Montreal",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_NOLA.jpg",
        alt: "Custom Built Iron Doors - Mirabella Doors - Design Name: Nola",
        imgName: "Nola",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //56^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Nola2.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Nola",
        imgName: "Nola",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Texas_Hill_Country.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Texas Hill Country",
        imgName: "Texas Hill Country",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Texas_Hill_Country2.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Texas Hill Country",
        imgName: "Texas Hill Country",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Ellis_LMP.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Ellis",
        imgName: "Ellis",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_French_Quarter.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: French Quarter",
        imgName: "French Quarter",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Gracia.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Gracia",
        imgName: "Gracia",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Haven.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Haven",
        imgName: "Haven",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Ivy.jpg",
        alt: "Transform Your Home Entryway - Houston - Traditional Iron Doors - Design Name: Ivy",
        imgName: "Ivy",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //64^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Ivy_LMP.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Ivy",
        imgName: "Ivy",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Reagan_LMP.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST&T_Verano.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Verano",
        imgName: "Verano",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDSTWSL&T_Waves.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Waves",
        imgName: "Waves",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDSTWT_Charmaine.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Charmaine",
        imgName: "Charmaine",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDSTWT_Madeline.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Madeline",
        imgName: "Madeline",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Bellagio.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Bellagio3.jpg",
        alt: "Mirabella Doors - Custom Iron Door Design and Installation - Design Name: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //72^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Blaze.jpg",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Milan.jpg",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Milan",
        imgName: "Milan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Morris.jpg",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Morris",
        imgName: "Morris",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Rodrigo_LMP.jpg",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Rodrigo",
        imgName: "Rodrigo",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEBWT_Caroline.jpg",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Caroline",
        imgName: "",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDFA_Blaze3.JPG",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDFA_Blaze4.JPG",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDFA_Southport.JPG",
        alt: "Expert Traditional Iron Door Design - Houston - Design Name: Southport",
        imgName: "Southport",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    //80^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDST_Canterbury.jpg",
        alt: "Premier Iron Doors in Houston - Quality Craftsmanship - Design Name: Canterbury",
        imgName: "Canterbury",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    // TRADITIONAL DOORS (image size small)
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDBT&T_Sophie_LMP.jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Sophie",
        imgName: "Sophie",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDEB_Bellaire_(front_elevation).jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Bellaire",
        imgName: "Bellaire",
        category: "traditional",
        size: "large",
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
