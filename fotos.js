var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },


  breakpoints:{
    0:{
        slidesPerView:2,
    },

    520:{
        slidesPerView:2,
    },

    950:{
        slidesPerView:3,
    }
}
});