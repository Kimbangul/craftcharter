import { SwiperProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Autoplay, EffectFade } from 'swiper/modules';

// NOTE type
export type SlideOptionType = SwiperProps & SwiperOptions;

export const textSlideOption: SlideOptionType = {
  direction: 'vertical',
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
  speed: 1000,
  className: 'Service__desti-list',
  loop: true,
  modules: [Autoplay],
  allowTouchMove: false,
};

export const imgSlideOption: SlideOptionType = {
  modules: [Autoplay, EffectFade],
  effect: 'fade',
  allowTouchMove: false,
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
  speed: 1200,
  loop: true,
  className: 'Service__img-slide',
};

export const delayOption: SwiperProps = {
  onInit: (swiper) => {
    const startSlide = () => {
      if (!swiper.autoplay) return;
      swiper.autoplay.start();
      console.log(swiper.autoplay);
    };

    setTimeout(startSlide, 1500);
  },
};

export const textSlideDelayOption = {
  ...textSlideOption,
  ...delayOption,
};

export const imgSlideDelayOption = {
  ...imgSlideOption,
  autoplay: false,
  ...delayOption,
};
