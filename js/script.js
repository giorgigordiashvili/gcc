//NAVBAR
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const content = document.querySelector(".content");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

const navSearch = document.querySelector(".search-button");
const navInput = document.querySelector(".search-input");

navSearch.addEventListener("click", () => {
  navInput.classList.toggle("search-active");
});

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function closeModal(id) {
  document.getElementById("myModal" + id).style.display = "none";
}
function openModal(id) {
  document.getElementById("myModal" + id).style.display = "block";
}

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
  parallax: true,
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

var swiper = new Swiper(".team-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,

  navigation: {
    nextEl: ".team-button-next",
    prevEl: ".team-button-prev",
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

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var swiper = new Swiper(".team-swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,

  navigation: {
    nextEl: ".team-button-next",
    prevEl: ".team-button-prev",
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
