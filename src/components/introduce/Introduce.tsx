import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { slideOption, cardOption } from 'components/introduce/slideOption';

import CARD01 from 'assets/image/introduce/card01.jpeg';
import CARD02 from 'assets/image/introduce/card02.jpeg';
import CARD03 from 'assets/image/introduce/card03.jpeg';

const Introduce = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const imgRef = useRef<null | SwiperRef>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  // FUNCTION 슬라이드 동기화
  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.swiper.slideTo(activeIdx, 1000);
  }, [activeIdx]);

  return (
    <section className='Introduce' ref={sectionRef}>
      <div className='Introduce__inner'>
        <Swiper className='Introduce__slider' {...slideOption} onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}>
          <SwiperSlide className='Introduce__slide'>
            <div className='Introduce__text-container'>
              <h2 className='Introduce__title'>
                Masters in the art of
                <br className='pc-only' /> moving you
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
                <br className='pc-only' /> to detail
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
                <br className='pc-only' /> home
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
        <Swiper ref={imgRef} className='Introduce__img-container' {...cardOption}>
          <SwiperSlide className='Introduce__img'>
            <img src={CARD01} alt='' />
          </SwiperSlide>
          <SwiperSlide className='Introduce__img'>
            <img src={CARD02} alt='' />
          </SwiperSlide>
          <SwiperSlide className='Introduce__img'>
            <img src={CARD03} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Introduce;
