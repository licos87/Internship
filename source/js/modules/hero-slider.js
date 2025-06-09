import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const initSliderHero = () => {
  const sliderElement = document.querySelector('.hero__swiper');
  const paginationElement = document.querySelector('.hero__pagination');
  if (!sliderElement || !paginationElement) {
    return;
  }

  new Swiper('.hero__swiper', {
    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    initialSlide: 0,
    simulateTouch: true,
    allowTouchMove: true,

    pagination: {
      el: '.hero__pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return `<button class="${className} hero__pagination-bullet" type="button" aria-label="Выберите слайд"></button>`;
      },
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      horizontalClass: 'hero__pagination-horizontal',
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
        slidesPerView: 1,
        grabCursor: false,
      },
    },

    on: {
      init: function() {
        insertPaginationToActiveSlide(this);
      },
      slideChange: function() {
        this.slides.forEach((slide, index) => {
          const isActive = index === this.activeIndex;
          slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
            .forEach((el) => {
              el.tabIndex = isActive ? 0 : -1;
            });
        });

        insertPaginationToActiveSlide(this);
      },
    },
  });

  function insertPaginationToActiveSlide(swiperInstance) {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    const targetElement = activeSlide.querySelector('.hero__container-nebo--title');

    if (activeSlide && targetElement && !activeSlide.contains(paginationElement)) {
      targetElement.parentNode.insertBefore(paginationElement, targetElement);
    }
  }
};

initSliderHero();
