import { Navigation, Pagination } from 'swiper/modules';

export const slideOption = {
  modules: [Navigation, Pagination],
  navigation: {
    enabled: false,
  },
  pagination: {
    clickable: true,
    nextEl: '.Fleet__nav-btn--next',
    prevEl: '.Fleet__nav-btn--prev',
  },
  speed: 1200,
  breakpoints: {
    0: {
      navigation: {
        enabled: false,
      },
    },
    1024: {
      navigation: {
        enabled: true,
      },
    },
  },
};
