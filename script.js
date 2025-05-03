var swiper = new Swiper(".slide-container",{
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,
    loop: false,
    grabCursor: true,
    touchRatio: 1,
    resistanceRatio: 0.85,
    allowSlidePrev: true,
    allowSlideNext: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    effect:'coverflow',
    coverflowEffect:{
      rotate:0,
      stretch:0,
      depth:400,
      modifier:1,
      slidesShadows:true, 
      
    },
    

    

});



var swiper = new Swiper(".slide-content-entre",{
    slidesPerView: 3,
    spaceBetween: 10,
    /*slidesPerGroup:3,*/
   autoplay:true,
   loop: true,
   pauseOnMouseEnter:true,
   disableOnInteraction:false,
    centerSlide:'true',
    fade:'true',
    
    gragCursor:'true',
    /*loopFillGroupWithBlank:true,*/
    pagination:{
        el:".pagination-entre",
        clickable:true,
        dynamicBullets:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
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

var swiper = new Swiper(".slide-content-info",{
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,
    loop: false,
    grabCursor: true,
    touchRatio: 1,
    resistanceRatio: 0.85,
    allowSlidePrev: true,
    allowSlideNext: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    effect:'coverflow',
    coverflowEffect:{
      rotate:0,
      stretch:0,
      depth:400,
      modifier:1,
      slidesShadows:true, 
      
    },
});



var swiper = new Swiper(".slide-content-ayuda",{
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    grabCursor: true,
    touchRatio: 1,
    resistanceRatio: 0.85,
    allowSlidePrev: true,
    allowSlideNext: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    effect:'coverflow',
    coverflowEffect:{
      rotate:0,
      stretch:0,
      depth:400,
      modifier:1,
      slidesShadows:true, 
      
    },
});