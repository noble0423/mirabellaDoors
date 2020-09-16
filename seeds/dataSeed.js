const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://mirabella:mirabelladoors1@ds361998.mlab.com:61998/mirabella"
);

const imageSeed = [
    // {
    //     src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     alt: "for",
    //     imgName: "connection",
    //     category: "contemporary",
    //     size: "small",
    //     date: new Date(Date.now())
    // },
    // {
    //     src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     alt: "for",
    //     imgName: "connection",
    //     category: "contemporary",
    //     size: "small",
    //     date: new Date(Date.now())
    // },
    // {
    //     src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     alt: "for",
    //     imgName: "connection",
    //     category: "contemporary",
    //     size: "small",
    //     date: new Date(Date.now())
    // },
    // {
    //     src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     alt: "for",
    //     imgName: "connection",
    //     category: "contemporary",
    //     size: "small",
    //     date: new Date(Date.now())
    // }

    // I've added 8 traditional doors (small) and 2 traditional doors (large) in order or filenames (so 1st 8 and 1st 2 respectively)
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0008-Edit.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Sophie",
        imgName: "Kendall",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_0017-Edit.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9774-Edit.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Montreal",
        imgName: "Montreal",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9805-Edit.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Sienna",
        imgName: "Sienna",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/_MG_9874-Edit.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Bellagio",
        imgName: "Bellagio",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_exterior_detail.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Reagan",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_front_interior_door.jpeg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Reagan (interior)",
        imgName: "Reagan",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
    {
        src: "/assets/images/mirabellaDoorsImgs/imagesComponent/traditional_resized_small/2_pleasant_wine_room_door.jpg",
        alt: "Mirabella Doors - Custom Door Designs - Houston, TX - Traditional Iron Doors - Design: Pleasant Wine Room",
        imgName: "Pleasant Wine Room",
        category: "traditional",
        size: "small",
        date: new Date(Date.now())
    },
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