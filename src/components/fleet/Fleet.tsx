import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import CARD_01 from 'assets/image/fleet/card_01.png';
import CARD_02 from 'assets/image/fleet/card_02.png';
import CARD_03 from 'assets/image/fleet/card_03.png';

import 'swiper/css';
import 'swiper/css/navigation';

const Fleet = () => {
  const slideOption = {
    modules: [Navigation],
    navigation: true,
    speed: 1200,
  };

  return (
    <section className='Fleet'>
      <h2 className='Fleet__title'>Hand-picked and leading edge</h2>
      <Swiper {...slideOption}>
        <SwiperSlide>
          <div className='Fleet__img-container'>
            <img src={CARD_01} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Fleet__img-container'>
            <img src={CARD_02} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Fleet__img-container'>
            <img src={CARD_03} alt='' />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='Fleet__btn'>
        <a href='#'>Explore our fleet</a>
      </div>
    </section>
  );
};

export default Fleet;
