import {products} from "./script.js"

let Year = new Date()
let currentYear = Year.getFullYear(2020)
let dateSpan = document.querySelector("span.date")
dateSpan.innerHTML = currentYear
// Products List



let trend = [];
let Music = [];
let MoviesTv = [];
let Design = [];
let Gaming = []

for(i in products){
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
console.log(trend)
console.log(Music)
console.log(MoviesTv)
console.log(Design)
console.log(Gaming)


// //Create Producte and apend it in main page
let Trend = document.querySelector(".products-grid.trend")
let GamingSec = document.querySelector(".products-grid.gaming")
let MoviesSec = document.querySelector(".products-grid.movies")
let DesignSec = document.querySelector(".products-grid.design")
let MusicSec = document.querySelector(".products-grid.music")

// // Trending
// for(i in trend){
//     // create Product image
//     let prodImg = document.createElement("img")
//     prodImg.setAttribute("src" , trend[i].image)
//     prodImg.setAttribute("alt" , trend[i].title)

//     // Create Title
//     let ProdTitle = document.createElement("h3")
//     ProdTitle.innerHTML = trend[i].title

//     // Create Buy Product 
//     let addToCart = document.createElement("button")
//     addToCart.className = "add-to-cart"
//     addToCart.innerHTML = "Buy Product"
    
//     // Create Price
//     let ProdPrice = document.createElement("span")
//     let prodInfo = document.createElement("div")
//     prodInfo.className = "product-info"
//     if(trend[i].discount > 0){
//         ProdPrice.innerHTML = `${(trend[i].price - ((trend[i].discount * trend[i].price) / 100)).toFixed(2)}MAD`
//         // create discount
//         let discount = document.createElement("span")
//         discount.className = "discount"
//         discount.innerHTML = `-${trend[i].discount}%`
//         prodInfo.appendChild(discount)
//     } else {
//         ProdPrice.innerHTML = `${trend[i].price}MAD`
//     }

//     // Create Payment  
//     let PayProd = document.createElement("div")
//     PayProd.className = "pay-prod"
//     PayProd.appendChild(ProdPrice)
//     PayProd.appendChild(addToCart)

//     // Product info 
//     prodInfo.appendChild(ProdTitle)
//     prodInfo.appendChild(PayProd)

//     // Create Product 
//     let product = document.createElement("div")
//     product.className = "product-card"
//     product.setAttribute("data-title", trend[i].title)
//     product.appendChild(prodImg)
//     product.appendChild(prodInfo)

//     // Create Pop 
//     let closeBtn = document.createElement("span")
//     closeBtn.className = "close-prod-popup"
//     let ImgProd = document.createElement("img")
//     ImgProd.setAttribute("src" , trend[i].image)
//     ImgProd.setAttribute("alt" , trend[i].title)
//     let imgSec = document.createElement("div")
//     imgSec.className ="img-sec"
//     imgSec.appendChild(ImgProd)
    
//     let ProdH1 = document.createElement("h1")
//     ProdH1.innerHTML= trend[i].title
    
//     let NewPrice = document.createElement("span")
//     NewPrice.className = 'newPrice'
//     let prices = document.createElement("div")
//     prices.className = "prices"
    
//     if(trend[i].discount > 0){
//         NewPrice.innerHTML = `${(trend[i].price - ((trend[i].discount * trend[i].price) / 100)).toFixed(2)}MAD`
//         // create discount
//         let OldPrice = document.createElement("span")
//         OldPrice.className = "oldPrice"
//         OldPrice.innerHTML = `${(trend[i].price).toFixed(2)}MAD`
//         prices.appendChild(NewPrice)
//         prices.appendChild(OldPrice)
//     } else {
//         NewPrice.innerHTML = `${(trend[i].price).toFixed(2)}MAD`
//         prices.appendChild(NewPrice)
//     }
   
//     let ProdH4 = document.createElement("h4")
//     ProdH4.innerHTML = 'Detaills'
//     let ProdP = document.createElement("p")
//     ProdP.innerHTML = trend[i].description

//     let ProdA = document.createElement("a")
//     ProdA.setAttribute("href" , trend[i].link)
//     ProdA.className = "buy-product"
//     ProdA.innerHTML = "Buy Product"
    
//     let ProdDetails = document.createElement("div")
//     ProdDetails.className = "prod-detaills"
//     ProdDetails.appendChild(ProdH1)
//     ProdDetails.appendChild(prices)
//     ProdDetails.appendChild(ProdH4)
//     ProdDetails.appendChild(ProdP)
//     ProdDetails.appendChild(ProdA)

//     // Create PopUp
//     let ProdContent = document.createElement("div")
//     ProdContent.className = "popUp-content"
//     ProdContent.appendChild(closeBtn)
//     ProdContent.appendChild(imgSec)
//     ProdContent.appendChild(ProdDetails)

//     let ProductPopup = document.createElement("div")
//     ProductPopup.className = "product-popup"
//     ProductPopup.appendChild(ProdContent)

//     let ProdContainer = document.createElement("div")
//     ProdContainer.className = "product-container"
//     ProdContainer.appendChild(product)
//     ProdContainer.appendChild(ProductPopup)
//     console.log(ProdContainer)

//     Trend.appendChild(ProdContainer)
// }
// // Gaming
// for(i in Gaming){
//     // create Product image
//     let prodImg = document.createElement("img")
//     prodImg.setAttribute("src" , Gaming[i].image)
//     prodImg.setAttribute("alt" , Gaming[i].title)

//     // Create Title
//     let ProdTitle = document.createElement("h3")
//     ProdTitle.innerHTML = Gaming[i].title

//     // Create Buy Product 
//     let addToCart = document.createElement("button")
//     addToCart.className = "add-to-cart"
//     addToCart.innerHTML = "Buy Product"
    
//     // Create Price
//     let ProdPrice = document.createElement("span")
//     let prodInfo = document.createElement("div")
//     prodInfo.className = "product-info"
//     if(Gaming[i].discount > 0){
//         ProdPrice.innerHTML = `${(Gaming[i].price - ((Gaming[i].discount * Gaming[i].price) / 100)).toFixed(2)}MAD`
//         // create discount
//         let discount = document.createElement("span")
//         discount.className = "discount"
//         discount.innerHTML = `-${Gaming[i].discount}%`
//         prodInfo.appendChild(discount)
//     } else {
//         ProdPrice.innerHTML = `${Gaming[i].price}MAD`
//     }

//     // Create Payment  
//     let PayProd = document.createElement("div")
//     PayProd.className = "pay-prod"
//     PayProd.appendChild(ProdPrice)
//     PayProd.appendChild(addToCart)

//     // Product info 
//     prodInfo.appendChild(ProdTitle)
//     prodInfo.appendChild(PayProd)

//     // Create Product 
//     let product = document.createElement("div")
//     product.className = "product-card"
//     product.setAttribute("data-title", Gaming[i].title)
//     product.appendChild(prodImg)
//     product.appendChild(prodInfo)

//     // Append to Trend
//     GamingSec.appendChild(product)
// }

// // Movies & Tv
// for(i in MoviesTv){
//     // create Product image
//     let prodImg = document.createElement("img")
//     prodImg.setAttribute("src" , MoviesTv[i].image)
//     prodImg.setAttribute("alt" , MoviesTv[i].title)

//     // Create Title
//     let ProdTitle = document.createElement("h3")
//     ProdTitle.innerHTML = MoviesTv[i].title

//     // Create Buy Product 
//     let addToCart = document.createElement("button")
//     addToCart.className = "add-to-cart"
//     addToCart.innerHTML = "Buy Product"
    
//     // Create Price
//     let ProdPrice = document.createElement("span")
//     let prodInfo = document.createElement("div")
//     prodInfo.className = "product-info"
//     if(MoviesTv[i].discount > 0){
//         ProdPrice.innerHTML = `${(MoviesTv[i].price - ((MoviesTv[i].discount * MoviesTv[i].price) / 100)).toFixed(2)}MAD`
//         // create discount
//         let discount = document.createElement("span")
//         discount.className = "discount"
//         discount.innerHTML = `-${MoviesTv[i].discount}%`
//         prodInfo.appendChild(discount)
//     } else {
//         ProdPrice.innerHTML = `${MoviesTv[i].price}MAD`
//     }

//     // Create Payment  
//     let PayProd = document.createElement("div")
//     PayProd.className = "pay-prod"
//     PayProd.appendChild(ProdPrice)
//     PayProd.appendChild(addToCart)

//     // Product info 
//     prodInfo.appendChild(ProdTitle)
//     prodInfo.appendChild(PayProd)

//     // Create Product 
//     let product = document.createElement("div")
//     product.className = "product-card"
//     product.setAttribute("data-title", MoviesTv[i].title)
//     product.appendChild(prodImg)
//     product.appendChild(prodInfo)

//     // Append to Trend
//     MoviesSec.appendChild(product)
// }

// // Design
// for(i in Design){
//     // create Product image
//     let prodImg = document.createElement("img")
//     prodImg.setAttribute("src" , Design[i].image)
//     prodImg.setAttribute("alt" , Design[i].title)

//     // Create Title
//     let ProdTitle = document.createElement("h3")
//     ProdTitle.innerHTML = Design[i].title

//     // Create Buy Product 
//     let addToCart = document.createElement("button")
//     addToCart.className = "add-to-cart"
//     addToCart.innerHTML = "Buy Product"
    
//     // Create Price
//     let ProdPrice = document.createElement("span")
//     let prodInfo = document.createElement("div")
//     prodInfo.className = "product-info"
//     if(Design[i].discount > 0){
//         ProdPrice.innerHTML = `${(Design[i].price - ((Design[i].discount * Design[i].price) / 100)).toFixed(2)}MAD`
//         // create discount
//         let discount = document.createElement("span")
//         discount.className = "discount"
//         discount.innerHTML = `-${Design[i].discount}%`
//         prodInfo.appendChild(discount)
//     } else {
//         ProdPrice.innerHTML = `${Design[i].price}MAD`
//     }

//     // Create Payment  
//     let PayProd = document.createElement("div")
//     PayProd.className = "pay-prod"
//     PayProd.appendChild(ProdPrice)
//     PayProd.appendChild(addToCart)

//     // Product info 
//     prodInfo.appendChild(ProdTitle)
//     prodInfo.appendChild(PayProd)

//     // Create Product 
//     let product = document.createElement("div")
//     product.className = "product-card"
//     product.setAttribute("data-title", Design[i].title)
//     product.appendChild(prodImg)
//     product.appendChild(prodInfo)

//     // Append to Trend
//     DesignSec.appendChild(product)
// }

// // Music
// for(i in Music){
//     // create Product image
//     let prodImg = document.createElement("img")
//     prodImg.setAttribute("src" , Music[i].image)
//     prodImg.setAttribute("alt" , Music[i].title)

//     // Create Title
//     let ProdTitle = document.createElement("h3")
//     ProdTitle.innerHTML = Music[i].title

//     // Create Buy Product 
//     let addToCart = document.createElement("button")
//     addToCart.className = "add-to-cart"
//     addToCart.innerHTML = "Buy Product"
    
//     // Create Price
//     let ProdPrice = document.createElement("span")
//     let prodInfo = document.createElement("div")
//     prodInfo.className = "product-info"
//     if(Music[i].discount > 0){
//         ProdPrice.innerHTML = `${(Music[i].price - ((Music[i].discount * Music[i].price) / 100)).toFixed(2)}MAD`
//         // create discount
//         let discount = document.createElement("span")
//         discount.className = "discount"
//         discount.innerHTML = `-${Music[i].discount}%`
//         prodInfo.appendChild(discount)
//     } else {
//         ProdPrice.innerHTML = `${Music[i].price}MAD`
//     }

//     // Create Payment  
//     let PayProd = document.createElement("div")
//     PayProd.className = "pay-prod"
//     PayProd.appendChild(ProdPrice)
//     PayProd.appendChild(addToCart)

//     // Product info 
//     prodInfo.appendChild(ProdTitle)
//     prodInfo.appendChild(PayProd)

//     // Create Product 
//     let product = document.createElement("div")
//     product.className = "product-card"
//     product.setAttribute("data-title", Music[i].title)
//     product.appendChild(prodImg)
//     product.appendChild(prodInfo)

//     // Append to Trend
//     MusicSec.appendChild(product)
// }




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
