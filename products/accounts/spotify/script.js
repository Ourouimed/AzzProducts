let ApiJson = '../../products.json'
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
                price.innerHTML = `${(Item.ItemPrice - discount).toFixed(2)}$`
                let DiscountItem = document.createElement("span")
                DiscountItem.className ="discount"
                DiscountItem.innerHTML = `${-Item.ItemDiscount}%`
                item.append(DiscountItem)
            }
            else {
                price.innerHTML = `${(Item.ItemPrice)}$`
            }
            
            // Create Button 
            let buy_Product = document.createElement("button")
            buy_Product.className = "buy-product"
            buy_Product.innerHTML = `Buy Product`
            buy_Product.addEventListener("click" , ()=>{
                //Create PopUp
                let popUpTitle = document.createElement("h1")
                popUpTitle.innerHTML = Item.ItemTitle
                let oldPrice = document.createElement("span")
                oldPrice.className = "old-price"
                let newPrice = document.createElement("span")
                newPrice.className = "new-price"
                let PricePopUp = document.createElement("div")
                PricePopUp.className= "prod-price-popup"
                if(Item.ItemDiscount > 0){
                    let discount = (Item.ItemPrice * Item.ItemDiscount)/100
                    oldPrice.innerHTML = `${Item.ItemPrice}$`
                    newPrice.innerHTML = `${(Item.ItemPrice - discount).toFixed(2)}$`
                    PricePopUp.append(oldPrice , newPrice) 
                }
                else {
                    newPrice.innerHTML = `${(Item.ItemPrice)}$`     
                    PricePopUp.append(newPrice)           
                }
                let DescTitle = document.createElement("h4")
                DescTitle.innerHTML = "Description"
                let Desc = document.createElement("p")
                Desc.innerHTML = `${Item.ItemDescription}`

                let PayBtns = document.createElement("div")
                PayBtns.className = "pay-btns"
                let link1 = document.createElement('a')
                link1.innerHTML = "Shopify"
                link1.href = Item.ItemUrl1
                link1.className = "shopify"
                let link2 = document.createElement('a')
                link2.innerHTML = "Paypal"
                link2.href = Item.ItemUrl2
                link2.className = "paypal"
                let link3 = document.createElement('a')
                link3.innerHTML = "More ways ?"
                link3.href = Item.ItemUrl3
                link3.className = "more"
                PayBtns.append(link1 , link2 , link3)

                let PopupText = document.createElement("div")
                PopupText.className = "popup-text"
                PopupText.append(popUpTitle ,PricePopUp , DescTitle ,Desc , PayBtns)
                //Popup Image
                let PopuPimg = document.createElement("img")
                PopuPimg.src = `${src}/${Item.ItemImagePopUp}`
                // `<ion-icon class="close-popup" name="close-outline"></ion-icon>`
                let closePopUp = document.createElement("ion-icon")
                closePopUp.className = "close-popup"
                closePopUp.name = "close-outline"

                let PopuPContent = document.createElement("div")
                PopuPContent.className = "popUp-content"
                PopuPContent.append(closePopUp , PopuPimg ,PopupText)


                
                let PopUp = document.createElement("div")
                PopUp.className = "item-popup"
                PopUp.append(PopuPContent)
                grid.append(PopUp)
                closePopUp.addEventListener("click" , ()=>{
                    PopUp.remove()
                })
            })
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


