import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slideOption } from 'components/fleet/slideOption';

import CARD_01 from '../../assets/image/fleet/card_01.png';
import CARD_02 from '../../assets/image/fleet/card_02.png';
import CARD_03 from '../../assets/image/fleet/card_03.png';
import { ReactComponent as ARROW_DOWN } from '../../assets/image/main/arrow-down.svg';

import 'swiper/css';
import 'swiper/css/pagination';

const Fleet = () => {
  const navRef = [useRef(), useRef()];
  return (
    <section className='Fleet'>
      <h2 className='Fleet__title'>Hand-picked and leading edge</h2>
      <Swiper
        {...slideOption}
        onInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'object') return;
          swiper.params.navigation.prevEl = navRef[0].current;
          swiper.params.navigation.nextEl = navRef[1].current;

          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <div className='Fleet__img-container'>
            <img src={CARD_01} alt='' />
          </div>
          <div className='Fleet__item-text-container'>
            <h3 className='Fleet__item-title'>
              <span className='Fleet__item-text'>challenger </span>
              <span className='Fleet__item-text--red'>350</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Fleet__img-container'>
            <img src={CARD_02} alt='' />
          </div>
          <div className='Fleet__item-text-container'>
            <h3 className='Fleet__item-title'>
              <span className='Fleet__item-text'>gulfstream</span>
              <span className='Fleet__item-text--red'>giv</span>
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Fleet__img-container'>
            <img src={CARD_03} alt='' />
          </div>
          <div className='Fleet__item-text-container'>
            <h3 className='Fleet__item-title'>
              <span className='Fleet__item-text'>gulfstream</span>
              <span className='Fleet__item-text--red'>g550</span>
            </h3>
          </div>
        </SwiperSlide>
        <div className='Fleet__nav-btn-container'>
          <button className='Fleet__nav-btn--prev' ref={navRef[0]}>
            <ARROW_DOWN />
          </button>
          <button className='Fleet__nav-btn--next' ref={navRef[1]}>
            <ARROW_DOWN />
          </button>
        </div>
      </Swiper>

      <div className='Fleet__btn'>
        <a href='#'>Explore our fleet</a>
      </div>
    </section>
  );
};

export default Fleet;
