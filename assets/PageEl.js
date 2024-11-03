let header = document.querySelector("header")
let nav =  document.querySelector("nav#top")
let footer = document.querySelector("footer")
let body = document.querySelectorAll("body")
body.forEach(body => {
  let src =  body.dataset.src

nav.innerHTML =     `
    <ul class="pages">
        <li><a href="${src}">Home</a></li>
        <li><a href="${src}privacy/">Privacy</a></li>
        <li><a href="${src}about/">About us</a></li>
        <li><a href="${src}contact/">Contact Us</a></li>
    </ul>
      <ul class="social">
        <li><a href="" class="instagram"></a></li>
        <li><a href="" class="x-twitter"></a></li>
        <li><a href="" class="facebook"></a></li>
        <li><a href="" class="whatsapp"></a></li>
    </ul>
`

header.innerHTML = `
      <h3 class="logo">
        <a href="${src}"> Social<span>Digital</span> </a>
      </h3>
      <ul class="navigation">
        <li><a href="">Home</a></li>
        <li><a href="">All Products</a></li>
        <li><a href="">Client Support</a></li>
        <li><a href="">Updates</a></li>
      </ul>
      <ul class="nav-btns">
        <button class="dark-mode"></button>
        <a href="" class="support"></a>
      </ul>
  `


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
});

