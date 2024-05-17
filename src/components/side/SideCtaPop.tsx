import { createContext, useContext, useEffect, useRef } from 'react';
import { setBodyPreventScroll } from 'util/index';

export const CtaPopContext = createContext(null);

const SideCtaPop = () => {
  const { isOpenCtaPop, setIsOpenCtaPop } = useContext(CtaPopContext);
  const popRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpenCtaPop) {
      if (popRef.current) popRef.current.focus();
      setBodyPreventScroll(true);
    } else {
      setBodyPreventScroll(false);
    }
  }, [isOpenCtaPop]);

  // FUNCTION 애니메이션을 위해 팝업을 닫을 때의 함수를 따로 처리
  const setClosePop = () => {
    if (!popRef.current) return;
    popRef.current.setAttribute('data-close', 'true');
    setTimeout(() => {
      setIsOpenCtaPop(false);
    }, 300);
  };

  const onClickPop = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    setClosePop();
  };

  return (
    <>
      {isOpenCtaPop && (
        <section className='SideCta__pop' ref={popRef} onClick={onClickPop}>
          <div className='SideCta__pop-inner'>
            <button className='SideCta__pop-close' onClick={setClosePop}>
              <span className='SideCta__pop-close-inner'>close</span>
            </button>
            <ul className='SideCta__pop-tab'>
              <li className='SideCta__pop-tab-item--active'>
                <button>
                  <h2 className='SideCta__pop-title'>Request a quote</h2>
                </button>
              </li>
            </ul>
            <div className='SideCta__pop-contents'>
              <iframe
                title='Request a quote'
                className='SideCta__pop-frame'
                src='https://client.jetinsight.com/embed/4414652a-a1c1-40a0-b8c0-04b1f862095b/Web-Request'
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SideCtaPop;
