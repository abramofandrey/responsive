const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
    // количество видимых слайдов
    slidesPerView: 1,
    // отступ между слайдами
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // включение отключение 
    // перетаскивания на пк
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания перетаскивания
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,
    slideToClickedSlide: true,
  
    loop: true,
  
    speed: 700,
  
  });