let header = document.querySelector("header")
let nav =  document.querySelector("nav#top")
let footer = document.querySelector("footer")

header.innerHTML = `
      <h3 class="logo">
        <a href="./index.html"> Social<span>Digital</span> </a>
      </h3>
      <div class="search-input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="search products herehg ...">
      </div>
      <div class="nav-btns">
        <a href="./contact/" class="support">Support</a>
        <a href="./products/" class="allProducts">All Products</a>
      </div>`

nav.innerHTML =     `
    <ul class="pages">
        <li><a href="./">Home</a></li>
        <li><a href="./privacy/">Privacy</a></li>
        <li><a href="./about/">About us</a></li>
        <li><a href="./contact/">Contact Us</a></li>
    </ul>
      <ul class="social">
        <li><a href="" class="instagram"></a></li>
        <li><a href="" class="x-twitter"></a></li>
        <li><a href="" class="facebook"></a></li>
        <li><a href="" class="whatsapp"></a></li>
    </ul>`

footer.innerHTML = `
    <div class="foot-top">
        <div class="foot-div">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi
            error natus animi at ad perspiciatis, inventore saepe placeat
          </p>
        </div>
        <div class="foot-div">
          <h2>Categories</h2>
          <ul>
            <li><a href="">Gaming</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Entertiment</a></li>
          </ul>
        </div>
        <div class="foot-div">
          <h2>Categories</h2>
          <ul>
            <li><a href="">Gaming</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Entertiment</a></li>
          </ul>
        </div>
        <div class="foot-div">
          <h2>Categories</h2>
          <ul>
            <li><a href="">Gaming</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Entertiment</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bot">
        <div class="copyrights">
          All Rights Reserved <a href="#"> Digital Services </a
          ><span class="date"></span> ©
        </div>
        <div class="powred-by">
          Powered By
          <a target="_blank" href="https://github.com/Ourouimed/">OurouiDev</a>
        </div>
      </div>
`