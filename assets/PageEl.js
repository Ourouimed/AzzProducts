let header = document.querySelector("header")
let nav =  document.querySelector("nav#top")
let footer = document.querySelector("footer")
let body = document.body;
let Allbody = document.querySelectorAll("body")
Allbody.forEach(body => {
  let src =  body.dataset.src
  nav.innerHTML =     `
      <p class="notif-msg">black friday discounts : +50% discount for game products</p>
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
          <li><a href="">Privacy</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <ul class="nav-btns">
          <button class="dark-mode">
            <i class="bi bi-moon"></i>
            <i class="bi bi-sun"></i>
          </button>
          <a href="" class="becomeSeller">
            All Products
            <i class="bi bi-shop-window"></i>
          </a>
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



// Dark Mode
let DarkBtn = document.querySelector(".dark-mode")

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark");
}

const DarkMode = () => {
  body.classList.toggle("dark");
  
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
}

DarkBtn.addEventListener("click", DarkMode);