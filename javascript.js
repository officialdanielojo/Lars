const closeNav = document.querySelector(".close_nav");
const openNav = document.querySelector(".bar_con");
const nav = document.querySelector(".nav_section");
const logo = document.querySelector(".logo");
const mainLogo = document.querySelector("#main_logo");

console.log(mainLogo, logo);

closeNav.addEventListener("click", function () {
  nav.classList.remove("showNav");
});

openNav.addEventListener("click", function () {
  nav.classList.add("showNav");
});

if (mainLogo.classList.contains("logo")) {
  logo.addEventListener("click", function () {
    location.href = "../index.html";
  });
} else {
  mainLogo.addEventListener("click", function () {
    location.href = "./index.html";
  });
}
