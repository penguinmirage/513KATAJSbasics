const button = document.querySelector(".show-hide__button");
const hiddenItems = document.querySelectorAll(".hidden-item");
let isHidden = true;
button.addEventListener("click", () => {
  button.textContent = isHidden ? "Показать все" : "Скрыть";

  isHidden = !isHidden;
  hiddenItems.forEach((item) => item.classList.toggle("hidden"));
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },
  mousewheel: true,
  keyboard: true,
});

// const mediaQuery = window.matchMedia(`(min-width: 768px)`);
// mediaQuery.addEventListener("change", () => {
//   initSwiper();
// });
//
// if (window.innerWidth > 766) {
//   swiper.destroy(true, true);
// } else {
// }

// var mySwiper = undefined;
// function initSwiper() {
//   var screenWidth = $(window).width();
//   if (screenWidth < 767 && mySwiper == undefined) {
//     mySwiper = new Swiper(".swiper-container", {
//       spaceBetween: 0,
//       freeMode: true,
//     });
//   } else if (screenWidth > 767 && mySwiper != undefined) {
//     mySwiper.destroy();
//     mySwiper = undefined;
//     jQuery(".swiper-wrapper").removeAttr("style");
//     jQuery(".swiper-slide").removeAttr("style");
//   }
// }
//
// //Swiper plugin initialization
// initSwiper();
//
// //Swiper plugin initialization on window resize
// $(window).on("resize", function () {
//   initSwiper();
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const width = window.innerWidth
//   if (width < 767){
//     const slider = new Swiper()
//   } else (
//     swiper.destroy(true, true);
//   )
// })
