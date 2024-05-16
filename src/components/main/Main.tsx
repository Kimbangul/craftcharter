import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useMemo, useState, FC } from 'react';
import useScroll from 'hooks/useScroll';
import useObserver from 'hooks/useObserver';

import MAIN_BG01 from 'assets/video/main-bg.mp4';
import MAIN_BG02 from 'assets/video/main-bg02.mp4';
import { ReactComponent as MainIcon } from 'assets/image/common/logo-icon.svg';
import { ReactComponent as ARROW_DOWN } from 'assets/image/main/arrow-down.svg';
import { MainPropsType } from 'components/main/type';

const Main: FC<MainPropsType> = ({ active }) => {
  const [scrollDir, setScrollDir] = useState<null | 'up' | 'down' | 'top'>(null);
  const [isIntro, setIsIntro] = useState(false);

  useEffect(() => {
    if (scrollDir !== null) {
      setScrollDir(null);
      return;
    }
  }, [scrollDir]);

  return (
    <div className='Main'>
      <div className='Main__logo' data-state={active ? 'active' : 'inactive'}>
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
  );
};

export default Main;
