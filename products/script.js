let Year = new Date()
let currentYear = Year.getFullYear(2020)
let dateSpan = document.querySelector("span.date")
dateSpan.innerHTML = currentYear

let AllProducts = document.querySelector(".products-grid.all")
let JsonApi = "./products/products.json"
fetch(JsonApi).then(result =>{
    let products = result.json()
    return products 
}).then(products =>{
    function createProductCard(product) {
        // create Product image
        let ImgSrc = "./media"
        product.image = `${ImgSrc}/${product.image}`
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
    setupAddToCartButtons(products, AllProducts);
})
