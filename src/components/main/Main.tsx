import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import useScroll from 'hooks/useScroll';
import useObserver from 'hooks/useObserver';

import MAIN_BG01 from '../../assets/video/main-bg.mp4';
import MAIN_BG02 from '../../assets/video/main-bg02.mp4';
import { ReactComponent as MainIcon } from '../../assets/image/common/logo-icon.svg';
import { ReactComponent as ARROW_DOWN } from '../../assets/image/main/arrow-down.svg';

const Main = () => {
  const mainRef = useRef<null | HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<null | 'up' | 'down' | 'top'>(null);

  const scroll = useScroll();

  useEffect(() => {
    if (scrollDir !== null) {
      setScrollDir(null);
      return;
    }
  }, [scrollDir]);

  const observer = useObserver(
    (entry: IntersectionObserverEntry[]) => {
      if (entry[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    { threshold: 0.5 }
  );

  const setNextSection = () => {
    const sec = document.querySelector('.Introduce');
    console.log(sec);
    if (!sec) return;

    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    }, 1000);
  };

  // useEffect(() => {
  //   if (scroll.scrollDir === 'down') {
  //     // setNextSection();
  //     console.log('실행')
  //   }
  // }, [scroll.scrollDir, scroll, prevScroll]);

  return (
    <section className='Main' ref={observer.target}>
      <div className='Main__logo'>
        <MainIcon />
      </div>
      <div className='Main__btn--next'>
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
