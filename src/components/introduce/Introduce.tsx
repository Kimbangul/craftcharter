import { Swiper, SwiperSlide } from 'swiper/react';
import { slideOption } from 'components/introduce/slideOption';

import CARD01 from 'assets/image/introduce/card01.jpeg';
import CARD02 from 'assets/image/introduce/card02.jpeg';
import CARD03 from 'assets/image/introduce/card03.jpeg';

const Introduce = () => {
  return (
    <section className='Introduce'>
      <div className='Introduce__inner'>
        <Swiper className='Introduce__slider' {...slideOption}>
          <SwiperSlide className='Introduce__slide'>
            <div className='Introduce__text-container'>
              <h2 className='Introduce__title'>
                Masters in the art of
                <br /> moving you
              </h2>
              <p className='Introduce__desc'>
                There’s private aviation and then there’s Craft. We deliver an uncompromising journey experience that goes beyond luxury.
              </p>
              <div className='Introduce__btn'>
                <a href='#'>Our services</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='Introduce__slide'>
            <div className='Introduce__text-container'>
              <h2 className='Introduce__title'>
                Obsessive attention
                <br /> to detail
              </h2>
              <p className='Introduce__desc'>
                Every moment is crafted from the second you arrive – From our bespoke cabin interiors to our custom in-flight hospitality.
              </p>
              <div className='Introduce__btn'>
                <a href='#'>Our services</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='Introduce__slide'>
            <div className='Introduce__text-container'>
              <h2 className='Introduce__title'>
                Feel completely at
                <br /> home
              </h2>
              <p className='Introduce__desc'>
                Your comfort and safety are our top priorities. Our state-of-the-art systems and specialized operational procedures are engrained in our
                safety-first culture.
              </p>
              <div className='Introduce__btn'>
                <a href='#'>Our services</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='Introduce__img-container'>
          <img className='Introduce__img' src={CARD01} alt='' />
          <img className='Introduce__img' src={CARD02} alt='' />
          <img className='Introduce__img' src={CARD03} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
