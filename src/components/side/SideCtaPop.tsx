import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { setBodyPreventScroll } from 'util/index';

export const CtaPopContext = createContext(false);

const SideCtaPop = () => {
  const [isOpenPop, setIsOpenPop] = useState(false);
  const popRef = useRef(null);

  useEffect(() => {
    if (isOpenPop) {
      if (popRef.current) popRef.current.focus();
      setBodyPreventScroll(true);
    } else {
      setBodyPreventScroll(false);
    }
  }, [isOpenPop]);

  const onClickCta = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (isOpenPop) {
        setIsOpenPop(false);
      } else {
        setIsOpenPop(true);
      }
    },
    [isOpenPop]
  );

  return (
    <section className='SideCta__pop' ref={popRef}>
      <div className='SideCta__pop-inner'>
        <button
          className='SideCta__pop-close'
          onClick={() => {
            setIsOpenPop(false);
          }}
        >
          <span className='SideCta__pop-close-inner'>close</span>
        </button>
        <ul className='SideCta__pop-tab'>
          <li className='SideCta__pop-tab-item--active'>
            <a href='#'>
              <h2 className='SideCta__pop-title'>Request a quote</h2>
            </a>
          </li>
        </ul>
        <div className='SideCta__pop-contents'>
          <iframe className='SideCta__pop-frame' src='https://client.jetinsight.com/embed/4414652a-a1c1-40a0-b8c0-04b1f862095b/Web-Request' />
        </div>
      </div>
    </section>
  );
};

export default SideCtaPop;
