const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// код из презентации
document.querySelectorAll('.stages__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.stages__link').forEach(function (btn) {
      btn.classList.remove('stages__link--active')
    });
    e.currentTarget.classList.add('stages__link--active');
    document.querySelectorAll('.stages__wrapper').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('stages__wrapper--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__wrapper--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false,
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
 function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    }
)

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
     })
});

let search = document.querySelector(".header__svg");
let searchOpen = document.querySelector(".header__search-2");
let searchClose = document.querySelector(".closed__svg");

search.addEventListener("click", function () {
  searchOpen.classList.toggle("header__search-2--active");
});

searchClose.addEventListener("click", function () {
  searchOpen.classList.remove("header__search-2--active");
});
