import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import useScroll from 'hooks/useScroll';
import useObserver from 'hooks/useObserver';
import MAIN_BG01 from '../../assets/video/main-bg.mp4';
import MAIN_BG02 from '../../assets/video/main-bg02.mp4';
import { ReactComponent as MainIcon } from 'assets/image/common/logo-icon.svg';
import { ReactComponent as ARROW_DOWN } from 'assets/image/main/arrow-down.svg';

const Main = () => {
  const mainRef = useRef<null | HTMLDivElement>(null);

  const scroll = useScroll();
  const scrollDir = useMemo(() => {
    return scroll.scrollDir;
  }, [scroll.scrollDir]);

  const observer = useObserver(
    (entry: IntersectionObserverEntry[]) => {
      if (entry[0].isIntersecting) {
        // document.addEventListener('scroll', onMoveSection);
      } else {
        // document.removeEventListener('scroll', onMoveSection);
      }
      // console.log(entry[0].isIntersecting);
    },
    { threshold: 0.5 }
  );

  const onMoveSection = useCallback(() => {
    console.log(scrollDir);
    if (scrollDir === 'up') {
      window.scrollTo({ top: 0 });
    }

    if (scrollDir === 'down') {
      console.log(window.innerHeight);
      window.scrollTo({ top: window.innerHeight });
    }
  }, [scrollDir]);

  // useEffect(() => {
  //   console.log(scroll.scrollDir);

  //   if (scroll.scrollDir === 'up') {
  //     window.scrollTo({ top: 0 });
  //   }

  //   if (scroll.scrollDir === 'down') {
  //     console.log(window.innerHeight);
  //     window.scrollTo({ top: window.innerHeight });
  //   }
  // }, [scroll.scroll, scroll.scrollDir]);

  return (
    <section className='Main' ref={observer.target}>
      <div className='Main__inner'>
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
      </div>
    </section>
  );
};

export default Main;
