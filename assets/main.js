let ApiJson = './products/products.json'
let AccountsGrid = document.querySelector(".products.accounts .products-items")
let GamesGrid = document.querySelector(".products.games .products-items")
let GC_Grid = document.querySelector(".products.gift-cards .products-items")

fetch(ApiJson).then(Data =>{
    let json = Data.json()
    return json
}).then(categories=>{
    function CreateProduct(cat , grid){
        let category = categories[cat]
        let products = category.products
        console.log(products)
        products.forEach(product =>{
            // Create Item 
            let item = document.createElement("div")
            item.className ="product"
            //Create Image
            let src=".."
            let itemImage = document.createElement("img")
            itemImage.src = `${src}/${product.productImage}`
            itemImage.alt = product.productTitle
            item.append(itemImage)
            // Create Price 
            // let price = document.createElement('span')
            // price.className = "price"
            // price.innerHTML =  `From <span>${product.ProductStartedPrice}</span>$`
            
            // Create Button 
            let buy_Product = document.createElement("a")
            buy_Product.className = "buy-product"
            buy_Product.innerHTML = `Show items (${product.productItems.length})`
            buy_Product.href = `${src}/${product.prodcutUrl}`
            let PriceDiv = document.createElement("div")
            PriceDiv.className = "price-div"
            PriceDiv.append(buy_Product)
            // Item Title 
            let h3Title = document.createElement("h3")
            h3Title.innerHTML = product.productTitle
            
            let ProdInfo = document.createElement("div")
            ProdInfo.className = 'prod-info'
            ProdInfo.append(h3Title , PriceDiv)
            item.append(ProdInfo)
            grid.append(item)
        })
    }
    CreateProduct(0,AccountsGrid)
    CreateProduct(1,GamesGrid)
    CreateProduct(2,GC_Grid)
}
)


