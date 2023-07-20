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
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
};
