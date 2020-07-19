//NAVBAR
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const content = document.querySelector(".content");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  content.classList.toggle("content-active");
});
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
