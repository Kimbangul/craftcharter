import { ReactComponent as ARROW } from 'assets/image/side/arrow.svg';
import { Swiper, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Autoplay } from 'swiper/modules';
import { textSlideOption, textSlideDelayOption } from 'components/service/slideOption';

const Service = () => {
  return (
    <section className='Service'>
      <div className='Service__text-container'>
        <div className='Service__desti-container'>
          <Swiper {...textSlideOption}>
            <SwiperSlide className='Service__desti-item'>ASE</SwiperSlide>
            <SwiperSlide className='Service__desti-item'>TEB</SwiperSlide>
            <SwiperSlide className='Service__desti-item'>OPF</SwiperSlide>
          </Swiper>
          <ARROW className='Service__desti-icon' />
          <Swiper {...textSlideDelayOption}>
            <SwiperSlide className='Service__desti-item'>VNY</SwiperSlide>
            <SwiperSlide className='Service__desti-item'>MYNN</SwiperSlide>
            <SwiperSlide className='Service__desti-item'>EGGW</SwiperSlide>
          </Swiper>
        </div>
        <h2 className='Service__title'>
          From North America
          <br /> to the world
        </h2>
        <p className='Service__desc'>
          Get closer to your destination. With a host of flying <br />
          locations, private airports and exclusive terminals - <br />
          we’ll take the interruptions out of your journey. Reliable <br />
          luxury, wherever you fly.
        </p>
        <div className='Service__btn'>
          <a href='#'>Contact us</a>
          <a href='#'>Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Service;
