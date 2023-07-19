import { ReactComponent as ARROW } from 'assets/image/side/arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { textSlideOption, textSlideDelayOption, imgSlideOption, imgSlideDelayOption } from 'components/service/slideOption';

import SERVICE_LEFT_IMG01 from 'assets/image/service/service_left_01.webp';
import SERVICE_LEFT_IMG02 from 'assets/image/service/service_left_02.webp';
import SERVICE_LEFT_IMG03 from 'assets/image/service/service_left_03.webp';
import SERVICE_RIGHT_IMG01 from 'assets/image/service/service_right_01.webp';
import SERVICE_RIGHT_IMG02 from 'assets/image/service/service_right_02.webp';
import SERVICE_RIGHT_IMG03 from 'assets/image/service/service_right_03.webp';
import 'swiper/css/effect-fade';

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
      <div className='Service__img-container'>
        <Swiper {...imgSlideOption}>
          <SwiperSlide className='Service__img-item'>
            <img src={SERVICE_LEFT_IMG01} alt='' />
          </SwiperSlide>
          <SwiperSlide className='Service__img-item'>
            <img src={SERVICE_LEFT_IMG02} alt='' />
          </SwiperSlide>
          <SwiperSlide className='Service__img-item'>
            <img src={SERVICE_LEFT_IMG03} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='Service__img-container'>
        <Swiper {...imgSlideDelayOption}>
          <SwiperSlide className='Service__img-item'>
            <img src={SERVICE_RIGHT_IMG01} alt='' />
          </SwiperSlide>
          <SwiperSlide className='Service__img-item'>
            <img src={SERVICE_RIGHT_IMG02} alt='' />
          </SwiperSlide>
          <SwiperSlide className='Service__img-item'>
            <img src={SERVICE_RIGHT_IMG03} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
