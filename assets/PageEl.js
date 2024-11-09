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
          <li><a href="${src}">Home</a></li>
          <li><a href="${src}privacy">Privacy</a></li>
          <li><a href="${src}about">About us</a></li>
          <li><a href="${src}contact">Contact Us</a></li>
        </ul>
        <ul class="nav-btns">
          <button class="dark-mode">
            <ion-icon class="dark-icon" name="moon-outline"></ion-icon>
            <ion-icon class="light-icon" name="sunny-outline"></ion-icon>
          </button>
          <a href="${src}products" class="becomeSeller">
            <ion-icon name="storefront-outline"></ion-icon>
            All Products
          </a>
        </ul>
    `


  footer.innerHTML = `
      <div class="foot-top">
          <div class="foot-div">
            <h3>About Us</h3>
            <p>
              Social Digital delivers affordable digital solutions for entertainment and social media, catering to a wide range of online needs.
            </p>
            <ul class="pay-gatways">
                <li><img src="${src}assets/media/visa.png" alt="visa"></li>
                <li><img src="${src}assets/media/mc.png" alt="visa"></li>
                <li><img src="${src}assets/media/cih.png" alt="visa"></li>
                <li><img src="${src}assets/media/cashplus.png" alt="visa"></li>
            </ul>
          </div>
          <div class="foot-div">
            <h3>Important Links</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="foot-div">
            <h3>Get in touch</h3>
            <ul>
              <li>+212636642346</li>
              <li>contact@socialDigital.com</li>
            </ul>
          </div>
        </div>
        <div class="foot-bot">
          <div class="copyrights">
            All Rights Reserved <a href="#"> Digital Services </a
            ><span class="date">${new Date().getFullYear()}</span> ©
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