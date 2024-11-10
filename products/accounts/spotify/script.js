let ApiJson = '../products.json'
let Grid = document.querySelector(".products-items")

fetch(ApiJson).then(Data =>{
    let json = Data.json()
    return json
}).then(categories=>{
    function CreateProduct(cat ,prod, grid){
        let category = categories[cat]
        let products = category.products
            let ProdItem = products[prod].productItems
            console.log(products[prod])
            ProdItem.forEach(Item =>{
                // Create Item 
            let item = document.createElement("div")
            item.className ="product"
            //Create Image
            let src="../../../"
            let itemImage = document.createElement("img")
            itemImage.src = `${src}/${Item.ItemImage}`
            itemImage.alt = Item.ItemTitle
            item.append(itemImage)
            
            // Create Price 
            let price = document.createElement("span")
            price.className ="price"
            if(Item.ItemDiscount > 0){
                let discount = (Item.ItemPrice * Item.ItemDiscount)/100
                price.innerHTML = `${Item.ItemPrice - discount}$`
                let DiscountItem = document.createElement("span")
                DiscountItem.className ="discount"
                DiscountItem.innerHTML = `${-Item.ItemDiscount}%`
                item.append(DiscountItem)
            }
            else {
                price.innerHTML = `${Item.ItemPrice}$`
            }
            
            // Create Button 
            let buy_Product = document.createElement("button")
            buy_Product.className = "buy-product"
            buy_Product.innerHTML = `Buy Product`
            let PriceDiv = document.createElement("div")
            PriceDiv.className = "price-div"
            PriceDiv.append(price,buy_Product)
            // Item Title 
            let h3Title = document.createElement("h3")
            h3Title.innerHTML = Item.ItemTitle
            
            let ProdInfo = document.createElement("div")
            ProdInfo.className = 'prod-info'
            ProdInfo.append(h3Title , PriceDiv)
            item.append(ProdInfo)
            grid.append(item)
            })
        
    }
    CreateProduct(0,0,Grid)
}
)


