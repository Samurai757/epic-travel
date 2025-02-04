// Находим элементы //
const btn = document.querySelector("#btn-mobile-nav");
const mobileBtnImg = document.querySelector("#mobile-nav-img");
const mobileNav = document.querySelector("#mobile-nav");
const header = document.querySelector("#header");

// Добавляем прослушку по клику //
btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  mobileNav.classList.toggle("open");
  header.classList.toggle("header-white-bg");
  document.body.classList.toggle("no-scroll");

  if (btn.classList.contains("open")) {
    mobileBtnImg.src = "./img/close-mobile-nav.svg";
  } else {
    mobileBtnImg.src = "./img/open-mobile-nav.svg";
  }
});
//const element = document.querySelector("#btn-mobile-nav");

window.addEventListener("resize", () => {
 if (window.innerWidth > 767) {
   header.classList.remove("header-white-bg");
   btn.classList.remove("open");
   mobileNav.classList.remove("open");
   mobileBtnImg.src = "./img/open-mobile-nav.svg";
 }
});
