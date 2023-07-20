import { SwiperProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Autoplay, EffectFade, EffectCreative, Navigation } from 'swiper/modules';
import { SlideOptionType } from 'components/common/type';

export const slideOption: SlideOptionType = {
  modules: [Navigation, EffectFade],
  speed: 1200,
  allowTouchMove: false,
  navigation: true,
  effect: 'fade',
};

export const cardOption: SlideOptionType = {
  modules: [EffectCreative],
  allowTouchMove: false,
  grabCursor: true,
  effect: 'creative',
  watchSlidesProgress: true,
  creativeEffect: {
    limitProgress: 4,
    prev: {
      shadow: true,
      translate: ['50%', 0, 300],
      opacity: 0,
    },
    next: {
      translate: ['-40%', 0, -300],
      opacity: 0.6,
    },
  },
};
