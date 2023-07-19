import { SwiperProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Autoplay } from 'swiper/modules';

export const textSlideOption: SwiperProps & SwiperOptions = {
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

export const delayOption: SwiperProps = {
  onInit: (swiper) => {
    swiper.autoplay.stop();

    const startSlide = () => {
      if (!swiper.autoplay) return;
      swiper.autoplay.start();
    };

    setTimeout(startSlide, 1500);
  },
};

export const textSlideDelayOption = {
  ...textSlideOption,
  ...delayOption,
};
