import Swiper from 'swiper';

const initSliderNewsFilter = () => {
  const sliderElement = document.querySelector('.news__filter-swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.news__filter-swiper', {
    modules: [],

    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 0,
    simulateTouch: true,
    // allowTouchMove: true,
    watchOverflow: true,
    // slideToClickedSlide: true,

    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 10,
      },
      1440: {
        spaceBetween: 30,
      },
    },
  });
};

initSliderNewsFilter();

