const closeNav = document.querySelector(".close_nav");
const openNav = document.querySelector(".bar_con");
const nav = document.querySelector(".nav_section");
const logo = document.querySelector(".logo");

closeNav.addEventListener("click", function () {
  nav.classList.remove("showNav");
});

openNav.addEventListener("click", function () {
  nav.classList.add("showNav");
});

logo.addEventListener("click", function () {
  location.href = "./index.html";
});
