//NAVBAR
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const content = document.querySelector(".content");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  content.classList.toggle("content-active");
});

const navSearch = document.querySelector(".search-button");
const navInput = document.querySelector(".search-input");

navSearch.addEventListener("click", () => {
  navInput.classList.toggle("search-active");
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

var slider = new Swiper(".home-slider-container", {
  direction: document.body.clientWidth < 768 ? "horizontal" : "vertical",

  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
