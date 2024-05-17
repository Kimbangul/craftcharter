import { debounce } from 'lodash';
import { useMemo, FC, useRef, useEffect } from 'react';

import MAIN_BG01 from 'assets/video/main-bg.mp4';
import MAIN_BG02 from 'assets/video/main-bg02.mp4';
import { ReactComponent as MainIcon } from 'assets/image/common/logo-icon.svg';
import { ReactComponent as ARROW_DOWN } from 'assets/image/main/arrow-down.svg';
import { ScenePropsType } from 'components/home/type';

const onClickBtn = () => {
  console.log('click');
  window.scrollTo({ top: window.scrollY + 100 });
};

const Main: FC<ScenePropsType> = ({ active }) => {
  const state = useMemo(() => (active ? 'active' : 'inactive'), [active]);
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (state === 'active') {
      setTimeout(() => {
        videoRef.current.play();
      }, 600);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [state]);

  return (
    <div className='Main'>
      <div className='Main__logo' data-state={state}>
        <MainIcon />
      </div>
      <button className='Main__btn--next' data-state={state} onClick={onClickBtn}>
        <p className='Main__text'>
          <span className='Main__text-line'>fly your way</span>
          <span className='Main__text-line'>Craft the perfect journey</span>
        </p>
        <ARROW_DOWN />
      </button>

      <video className='Main__video' ref={videoRef} autoPlay={false} muted loop playsInline data-state={state}>
        <source src={MAIN_BG01} />
        <source src={MAIN_BG02} />
      </video>
    </div>
  );
};

export default Main;
