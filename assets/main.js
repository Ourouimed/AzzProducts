let Year = new Date()
let currentYear = Year.getFullYear(2020)
let dateSpan = document.querySelector("span.date")
dateSpan.innerHTML = currentYear


//Products list
let source= "../products/media"
let products = [
    {
        title : "spotify account (12 mo)",
        price : 100,
        image : `${source}/spotify.png`,
        discount : 0,
        trend : true,
        category : "Music",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"

    },
    {
        title : "Netflix account (12 mo)",
        price : 90,
        image : `${source}/netflix.png`,
        discount : 10,
        trend : false,
        category : "Movies & Tv",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Canva Pro (unlimited)",
        price : 130,
        image : `${source}/canva.png`,
        discount : 20,
        trend : false,
        category : "Design",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "EA FC25 Ultimate edition",
        price : 200,
        image : `${source}/fc25.png`,
        discount : 50,
        trend : true,
        category : "Gaming",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Efootball Coins - Mobile",
        price : 20,
        image : `${source}/efootball.png`,
        discount : 15,
        trend : true,
        category : "Gaming",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Red Dead Redemption II",
        price : 300,
        image : `${source}/RDRII.png`,
        discount : 35,
        trend : true,
        category : "Gaming",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "xbox game pass (12mo)",
        price : 100,
        image : `${source}/xbox.png`,
        discount : 5,
        trend : false,
        category : "Gaming",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Shahid Vip (24mo)",
        price : 100,
        image : `${source}/shahid.png`,
        discount : 30,
        trend : false,
        category : "Movies & Tv",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Iptv Football (12mo)",
        price : 80,
        image : `${source}/iptv.png`,
        discount : 0,
        trend : false,
        category : "Movies & Tv",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Free Fire Account",
        price : 50,
        image : `${source}/ff.png`,
        discount : 8.2,
        trend : false,
        category : "Gaming",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "TOD 12 mounth",
        price : 300,
        image : `${source}/tod.jpg`,
        discount : 35,
        trend : true,
        category : "Movies & Tv",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "StarzPlay Premium 12mo",
        price : 200,
        image : `${source}/SP.jpg`,
        discount : 15,
        trend : false,
        category : "Movies & Tv",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "StarzPlay Premium 12mo",
        price : 200,
        image : `${source}/SP.jpg`,
        discount : 15,
        trend : false,
        category : "Movies & Tv",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
    {
        title : "Adobe Photoshop",
        price : 270,
        image : `${source}/ps.jpg`,
        discount : 70,
        trend : false,
        category : "Design",
        description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis optio qui animi ullam eos praesentium esse ipsam et vero.',
        link : "link here"
    },
]



let trend = [];
let Music = [];
let MoviesTv = [];
let Design = [];
let Gaming = []

for(let i in products){
if (products[i].trend){
    trend.push(products[i])
}
if (products[i].category == "Music"){
    Music.push(products[i])
}
else if (products[i].category == "Movies & Tv"){
    MoviesTv.push(products[i])
}
else if (products[i].category == "Design"){
    Design.push(products[i])
}
else if (products[i].category == "Gaming"){
    Gaming.push(products[i])
}
}


// //Create Producte and apend it in main page
let Trend = document.querySelector(".products-grid.trend")
let GamingSec = document.querySelector(".products-grid.gaming")
let MoviesSec = document.querySelector(".products-grid.movies")
let DesignSec = document.querySelector(".products-grid.design")
let MusicSec = document.querySelector(".products-grid.music")




// Function to create product card
function createProductCard(product) {
    // create Product image
    let prodImg = document.createElement("img");
    prodImg.setAttribute("src", product.image);
    prodImg.setAttribute("alt", product.title);

    // Create Title
    let ProdTitle = document.createElement("h3");
    ProdTitle.innerHTML = product.title;

    // Create Buy Product 
    let addToCart = document.createElement("button");
    addToCart.className = "add-to-cart";
    addToCart.innerHTML = "Buy Product";

    // Create Price
    let ProdPrice = document.createElement("span");
    let prodInfo = document.createElement("div");
    prodInfo.className = "product-info";
    if (product.discount > 0) {
        ProdPrice.innerHTML = `${(product.price - ((product.discount * product.price) / 100)).toFixed(2)} MAD`;
        // create discount
        let discount = document.createElement("span");
        discount.className = "discount";
        discount.innerHTML = `-${product.discount}%`;
        prodInfo.appendChild(discount);
    } else {
        ProdPrice.innerHTML = `${product.price} MAD`;
    }

    // Create Payment  
    let PayProd = document.createElement("div");
    PayProd.className = "pay-prod";
    PayProd.appendChild(ProdPrice);
    PayProd.appendChild(addToCart);

    // Product info 
    prodInfo.appendChild(ProdTitle);
    prodInfo.appendChild(PayProd);

    // Create Product 
    let productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-title", product.title);
    productCard.appendChild(prodImg);
    productCard.appendChild(prodInfo);

    return { productCard, addToCart };
}

// Function to create pop-up
function createProductPopup(product) {
    let closeBtn = document.createElement("span");
    closeBtn.className = "close-prod-popup";
    
    let ImgProd = document.createElement("img");
    ImgProd.setAttribute("src", product.image);
    ImgProd.setAttribute("alt", product.title);
    
    let imgSec = document.createElement("div");
    imgSec.className = "img-sec";
    imgSec.appendChild(ImgProd);
    
    let ProdH1 = document.createElement("h1");
    ProdH1.innerHTML = product.title;
    
    let NewPrice = document.createElement("span");
    NewPrice.className = 'newPrice';
    let prices = document.createElement("div");
    prices.className = "prices";

    if (product.discount > 0) {
        NewPrice.innerHTML = `${(product.price - ((product.discount * product.price) / 100)).toFixed(2)} MAD`;
        let OldPrice = document.createElement("span");
        OldPrice.className = "oldPrice";
        OldPrice.innerHTML = `${(product.price).toFixed(2)} MAD`;
        prices.appendChild(NewPrice);
        prices.appendChild(OldPrice);
    } else {
        NewPrice.innerHTML = `${(product.price).toFixed(2)} MAD`;
        prices.appendChild(NewPrice);
    }
   
    let ProdH4 = document.createElement("h4");
    ProdH4.innerHTML = 'Details';
    let ProdP = document.createElement("p");
    ProdP.innerHTML = product.description;

    let ProdA = document.createElement("a");
    ProdA.setAttribute("href", product.link);
    ProdA.className = "buy-product";
    ProdA.innerHTML = "Buy Product";
    
    let ProdDetails = document.createElement("div");
    ProdDetails.className = "prod-details";
    ProdDetails.appendChild(ProdH1);
    ProdDetails.appendChild(prices);
    ProdDetails.appendChild(ProdH4);
    ProdDetails.appendChild(ProdP);
    ProdDetails.appendChild(ProdA);

    // Create Pop-Up
    let ProdContent = document.createElement("div");
    ProdContent.className = "popUp-content";
    ProdContent.appendChild(closeBtn);
    ProdContent.appendChild(imgSec);
    ProdContent.appendChild(ProdDetails);

    let ProductPopup = document.createElement("div");
    ProductPopup.className = "product-popup";
    ProductPopup.appendChild(ProdContent);

    return ProductPopup;
}

// Event listener to show pop-up on button click
function setupAddToCartButtons(products, section) {
    products.forEach(product => {
        let { productCard, addToCart } = createProductCard(product);
        section.appendChild(productCard);

        // Show pop-up on button click
        addToCart.addEventListener("click", () => {
            let popup = createProductPopup(product);
            document.body.appendChild(popup);
            popup.style.display = 'flex'; // Show the pop-up

            // Close the pop-up when close button is clicked
            let closeBtn = popup.querySelector(".close-prod-popup");
            closeBtn.addEventListener("click", () => {
                document.body.removeChild(popup); // Remove from DOM
            });
        });
    });
}

// Call the function for each category
setupAddToCartButtons(trend, Trend);
setupAddToCartButtons(Gaming, GamingSec);
setupAddToCartButtons(MoviesTv, MoviesSec);
setupAddToCartButtons(Design, DesignSec);
setupAddToCartButtons(Music, MusicSec);
