import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import useScroll from 'hooks/useScroll';
import useObserver from 'hooks/useObserver';

import MAIN_BG01 from '../../assets/video/main-bg.mp4';
import MAIN_BG02 from '../../assets/video/main-bg02.mp4';
import { ReactComponent as MainIcon } from 'assets/image/common/logo-icon.svg';
import { ReactComponent as ARROW_DOWN } from 'assets/image/main/arrow-down.svg';

const Main = () => {
  const mainRef = useRef<null | HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);

  const scroll = useScroll();

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

  // const onChange = useCallback(() => console.log(dir), [dir]);

  // useEffect(() => {
  //   document.addEventListener('scroll', debounce(onChange, 300));

  //   return () => document.removeEventListener('scroll', debounce(onChange, 300));
  // }, [onChange]);

  useEffect(() => {
    if (scroll.scrollDir === 'down' && isVisible) {
      console.log('실행');
    }
  }, [scroll.scrollDir, isVisible]);

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
