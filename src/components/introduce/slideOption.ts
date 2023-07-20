import { SwiperProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Autoplay, EffectFade, EffectCreative, Navigation } from 'swiper/modules';
import { SlideOptionType } from 'components/common/type';

export const slideOption: SlideOptionType = {
  modules: [Navigation, EffectFade],
  speed: 1200,
  allowTouchMove: false,
  navigation: true,
};

export const cardOption: SlideOptionType = {
  modules: [EffectCreative],
  allowTouchMove: false,
};
