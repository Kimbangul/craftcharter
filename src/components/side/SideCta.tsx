import { useCallback, useContext } from 'react';
import { ReactComponent as ARROW } from 'assets/image/side/arrow.svg';
import { CtaPopContext } from 'components/side/SideCtaPop';

const SideCta: React.FC<SideCtaPropsType> = ({ beforeOpen }) => {
  const { isOpenCtaPop, setIsOpenCtaPop } = useContext(CtaPopContext);

  const onClickCta = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (beforeOpen) beforeOpen();
      if (isOpenCtaPop) {
        // FUNCTION 애니메이션을 위해 팝업을 닫을 때의 함수를 따로 처리
        const popupCloseBtn: HTMLElement | undefined = document.querySelector('.SideCta__pop');
        if (!popupCloseBtn) return;
        popupCloseBtn.click();
      } else {
        setIsOpenCtaPop(true);
      }
    },
    [isOpenCtaPop]
  );

  return (
    <>
      <div className='SideCta' data-isopen={isOpenCtaPop}>
        <a href='#' onClick={onClickCta}>
          <p className='SideCta__text'>
            Take Flight <ARROW className='SideCta__text-icon' />
          </p>
          <p className='SideCta__text'>
            Quote <ARROW className='SideCta__text-icon' />
          </p>
          <p className='SideCta__text'>Close</p>
        </a>
      </div>
    </>
  );
};

export interface SideCtaPropsType {
  beforeOpen?: () => void;
}

export default SideCta;
