import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { slideOption, cardOption } from 'components/introduce/slideOption';

import CARD01 from 'assets/image/introduce/card01.jpeg';
import CARD02 from 'assets/image/introduce/card02.jpeg';
import CARD03 from 'assets/image/introduce/card03.jpeg';

const Introduce = () => {
  const [scroll, setScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'top'>('top');

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const imgRef = useRef<null | SwiperRef>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  // FUNCTION 슬라이드 동기화
  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.swiper.slideTo(activeIdx, 1000);
  }, [activeIdx]);

  // FUNCTION 스크롤 감지 시 실행
  const onScrollMain = (e: Event | WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log(e instanceof WheelEvent && e.deltaY < 0);
    if (e instanceof WheelEvent && e.deltaY < 0) {
      scrollToPrev();
    }
  };

  // FUNCTION intersection Observer 콜백 함수
  const onObserveMain = (entry: IntersectionObserverEntry[]) => {
    console.log(entry[0].intersectionRatio);
    if (entry[0].intersectionRatio < 0.8) {
      document.removeEventListener('wheel', onScrollMain);
    } else if (entry[0].intersectionRatio >= 0.8) {
      // document.addEventListener('wheel', onScrollMain);
    }
  };

  const mainObserver = new IntersectionObserver(
    (entry) => {
      onObserveMain(entry);
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: [1.0, 0.7, 0.2, 0],
    }
  );

  // FUNCTION 이전 section으로 scroll
  const scrollToPrev = () => {
    const main = document.querySelector('.Main');
    if (!main) return;
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    console.log('dd');
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // FUNCTION intersection observer 부착
  useEffect(() => {
    if (!sectionRef.current) return;
    mainObserver.observe(sectionRef.current);
  }, []);

  return (
    <section className='Introduce' ref={sectionRef}>
      <div className='Introduce__inner'>
        <Swiper className='Introduce__slider' {...slideOption} onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}>
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
