//NAVBAR
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const content = document.querySelector(".content");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  content.classList.toggle("content-active");
});
