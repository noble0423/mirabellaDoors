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
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Emerson_copy.JPG",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Emerson_LMP.jpeg",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Emerson",
        imgName: "Emerson",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Kinley2.jpg",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Kinley",
        imgName: "Kinley",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFA_Phoenician_LMP.jpeg",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Phoenician",
        imgName: "Phoenician",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDFAWFS_Madison_(solid).jpg",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Madison",
        imgName: "Madison",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDSL&T_Reagan_with_LMP.jpg",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/DDST_Alexander_LMP.JPG",
        alt: "Custom Door Design Experts - Houston Design Center - Design Name: Alexander",
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
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Milan.jpg",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Milan",
        imgName: "Milan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Morris.jpg",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Morris",
        imgName: "Morris",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEB_Rodrigo_LMP.jpg",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Rodrigo",
        imgName: "Rodrigo",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDEBWT_Caroline.jpg",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Caroline",
        imgName: "",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDFA_Blaze3.JPG",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDFA_Blaze4.JPG",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/SDFA_Southport.JPG",
        alt: "Expert Traditional Iron Door Design - Houston Design Center - Design Name: Southport",
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
    // TRADITIONAL DOORS (image size large)
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
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDFA_Kinley.jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Kinley",
        imgName: "Kinley",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDFA_Reagan.jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDFA_Sienna_LMP.jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Sienna",
        imgName: "Sienna",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST_Bellagio_(front_elevation).jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST_Bellagio_(inside_view).jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Bellagio (inside view)",
        imgName: "Bellagio",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST_Kendall_(front_elevation).jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Kendall",
        imgName: "Kendall",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    //8^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST_Montreal_(with_leaves).jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: Montreal (with leaves)",
        imgName: "Montreal (with leaves)",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST_WDB_Front_Elevation.jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: WDB Front Elevation",
        imgName: "WBD Front Elevation",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST&T_Phoenician.jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: Phoenician",
        imgName: "Phoenician",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDST&T&FS_Reagan_(catalog_cover).jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDSTWT_Cosompolitan_4_units.jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: Cosmopolitan",
        imgName: "Cosmopolitan",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDSTWT_Waves.JPG",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: Waves",
        imgName: "Waves",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/DDT&FS_Reagan_(interior_view).jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Design: Reagan (interior view)",
        imgName: "Reagan",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/HDC_Sign_Out_Front_w-MD.jpg",
        alt: "Hand Crafted Custom Iron Doors for Home and Office - Texas - Houston Design Center Signage",
        imgName: "Houston Design Center",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    //16^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/SDFA_Blaze2.JPG",
        alt: "Custom Luxury Iron Doors - Superb Craftsmanship - Texas - Design: Blaze",
        imgName: "Blaze",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },    
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_large/SDST_Victoria.jpg",
        alt: "Custom Luxury Iron Doors - Superb Craftsmanship - Texas - Design: Victoria",
        imgName: "Victoria",
        category: "traditional",
        size: "large",
        date: new Date(Date.now())
    },
    // CONTEMPORARY DOORS (image size small)
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook.jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook)",
        imgName: "Cosmopolitan (Clearbrook)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_Back_Patio2.jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook, Back Patio)",
        imgName: "Cosmopolitan (Clearbrook, Back Patio)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_Covered_Patio.jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook, Covered Patio)",
        imgName: "Cosmopolitan (Clearbrook, Covered Patio)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_Dining_(exterior).jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook, Dining Room, Exterior View)",
        imgName: "Cosmopolitan (Clearbrook, Dining Room)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_Dining_&_Wine.jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook, Dining and Wine Rooms)",
        imgName: "Cosmopolitan (Clearbrook, Dining and Wine Rooms)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_Dining_&_Wine2.jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook, Dining and Wine Rooms)",
        imgName: "Cosmopolitan (Clearbrook, Dining and Wine Rooms)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_LR_Shot.jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook)",
        imgName: "Cosmopolitan (Clearbrook)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_LR_Shot_(4_doors).jpg",
        alt: "Mirabella Doors - Contemporary Doors - Design: Cosmopolitan (Clearbrook)",
        imgName: "Cosmopolitan (Clearbrook)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    //8^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/919_Clearbrook_Wine.jpg",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: Cosmopolitan (Clearbrook, Wine Room)",
        imgName: "Cosmopolitan (Clearbrook, Wine Room)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/161011_4035WMain-003.jpg",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: West Main",
        imgName: "West Main",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/161011_4035WMain-007.jpg",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: West Main",
        imgName: "West Main",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmo_DDwFAT_Flemish.jpeg",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: Cosmo",
        imgName: "Cosmo",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmo_DDwSL_(exterior).JPG",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: Cosmo (exterior)",
        imgName: "Cosmo",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmo_DDwST_Reeded_glass.jpg",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: Cosmo",
        imgName: "Cosmo",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_(wide)-Copper_Patina_Finish-Clear_Glass.JPG",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: Cosmopolitan (Copper Patina Finish)",
        imgName: "Cosmopolitan (Copper Patina Finish)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_DDWT-Copper_Patina_Finish-Clear_Glass.jpeg",
        alt: "Stunning Contemporary Doors - Custom Designed and Installed - Houston, TX - Design: Cosmopolitan (Copper Patina Finish)",
        imgName: "Cosmopolitan (Copper Patina Finish)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    //16^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_Front_Entry_Doors.jpg",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (Front Entry Doors)",
        imgName: "Cosmopolitan (Front Entry Doors)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_L_Shaped_Unit.jpg",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (L-Shaped Unit)",
        imgName: "Cosmopolitan (L-Shaped Unit)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_SDSL_and_L_Shaped_Back_Wall.jpg",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (L-Shaped Back Wall)",
        imgName: "Cosmopolitan (L-Shaped Back Wall)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_SDSL_and_L_Shaped_Back_Wall_2.jpg",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (L-Shaped Back Wall)",
        imgName: "Cosmopolitan (L-Shaped Back Wall)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan_Wide_&_Arched-Pewter_Finish-Flemish_Glass.JPG",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (Arched Pewter Finish)",
        imgName: "Cosmopolitan (Arched Pewter Finish)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Cosmopolitan-Black_Finish-Clear_Glass.JPG",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (Black Finish)",
        imgName: "Cosmopolitan (Black Finish)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/DDST_Cosmopolitan-Tipler.jpg",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (Tipler)",
        imgName: "Cosmopolitan (Tipler)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/DDSTWT_Cosmopolitan_(frosted)2.JPG",
        alt: "Houston Design Center - Mirabella Doors - Custom Door Designs - Design: Cosmopolitan (Frosted)",
        imgName: "Cosmopolitan (Frosted)",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    //24^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/TEH_Conference_Room.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: TEH Conference Room",
        imgName: "TEH Conference Room",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Brandon-Way-11706-IMG-06_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Brandon Way",
        imgName: "Brandon Way",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Brandon-Way-11706-IMG-11_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Brandon Way",
        imgName: "Brandon Way",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Brandon-Way-11706-IMG-21_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Brandon Way",
        imgName: "Brandon Way",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Brandon-Way-11706-IMG-58_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Brandon Way",
        imgName: "Brandon Way",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Brandon-Way-11706-IMG-64_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Brandon Way",
        imgName: "Brandon Way",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Jamestown-11302-IMG-39_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Jamestown",
        imgName: "Jamestown",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/Jamestown-11302-IMG-41_1_1.jpg",
        alt: "Design My Dream Door - Mirabella Doors - Houston, TX - Design: Jamestown",
        imgName: "",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    //32^
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/SDWFS_Cosmopolitan_(Flemish_glass).jpg",
        alt: "Iron Door Houston - Design: Cosmopolitan",
        imgName: "Cosmopolitan",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/Cosmopolitan_resized_small/SDWFS_Cosmopolitan_(money_shot).jpg",
        alt: "Iron Door Houston - Design: Cosmopolitan",
        imgName: "Cosmopolitan",
        category: "contemporary",
        size: "small",
        date: new Date(Date.now())
    },

    //CONTEMPORARY DOORS (image size large)
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