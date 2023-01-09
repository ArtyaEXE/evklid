const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll(".step-item__link");
let tabsItem = document.querySelectorAll(".how-container__block");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("step-item-link--active");
    });
    e.currentTarget.classList.add("step-item-link--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("how-block--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("how-block--active");
  });
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
let menuLinks = menu.querySelectorAll(".menu-item__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__menu--active");
  document.body.classList.toggle("stop__scroll");
});

menuLinks.forEach(function (el) {
  burger.classList.remove("burger--active");
  menu.classList.remove("header__menu--active");
  document.body.classList.remove("stop__scroll");
});

let search = document.querySelector(".header__search");
let searchBtn = document.querySelector(".header-menu__button");
let closeBtn = document.querySelector(".search__close");

searchBtn.addEventListener("click", function () {
  search.classList.toggle("header__search--active");
});

closeBtn.addEventListener("click", function () {
  search.classList.remove("header__search--active");
});
