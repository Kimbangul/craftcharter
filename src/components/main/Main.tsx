import { useEffect, useRef } from 'react';
import MAIN_BG01 from '../../assets/video/main-bg.mp4';
import MAIN_BG02 from '../../assets/video/main-bg02.mp4';
import { ReactComponent as MainIcon } from 'assets/image/common/logo-icon.svg';
import { ReactComponent as ARROW_DOWN } from 'assets/image/main/arrow-down.svg';

const Main = () => {
  const mainRef = useRef<null | HTMLDivElement>(null);

  // FUNCTION 스크롤 감지 시 실행
  const onScrollMain = (e: Event | WheelEvent) => {
    if (e instanceof WheelEvent && e.deltaY > 0) {
      scrollToNext();
    }
  };

  // FUNCTION intersection Observer 콜백 함수
  const onObserveMain = (entry: IntersectionObserverEntry[]) => {
    // console.log(entry[0].intersectionRatio);
    if (entry[0].intersectionRatio <= 0) {
      document.body.style.height = 'auto';
      document.body.style.overflowY = 'auto';
      document.removeEventListener('wheel', onScrollMain);
    } else if (entry[0].intersectionRatio >= 0.8) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
      document.addEventListener('wheel', onScrollMain);
    }
  };

  const mainObserver = new IntersectionObserver(
    (entry) => {
      onObserveMain(entry);
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: [1.0, 0.8, 0],
    }
  );

  // FUNCTION intersection observer 부착
  useEffect(() => {
    if (!mainRef.current) return;
    mainObserver.observe(mainRef.current);
  }, []);

  // FUNCTION 다음 section으로 scroll
  const scrollToNext = () => {
    const introduce = document.querySelector('.Introduce');
    if (!introduce) return;

    introduce.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className='Main' ref={mainRef}>
      <div className='Main__logo'>
        <MainIcon />
      </div>
      <div className='Main__btn--next' onClick={scrollToNext}>
        <p className='Main__text'>
          <span className='Main__text-line'>fly your way</span>
          <span className='Main__text-line'>Craft the perfect journey</span>
        </p>
        <ARROW_DOWN />
      </div>

      <video className='Main__video' autoPlay={true} muted loop playsInline>
        <source src={MAIN_BG01} />
        <source src={MAIN_BG02} />
      </video>
    </section>
  );
};

export default Main;
