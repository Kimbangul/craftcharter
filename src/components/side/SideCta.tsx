import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ReactComponent as ARROW } from 'assets/image/side/arrow.svg';
import { CtaPopContext } from 'components/side/SideCtaPop';

const SideCta: React.FC<SideCtaPropsType> = ({ beforeOpen }) => {
  const { isOpenCtaPop, setIsOpenCtaPop } = useContext(CtaPopContext);

  const onClickCta = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (beforeOpen) beforeOpen();
      if (isOpenCtaPop) {
        setIsOpenCtaPop(false);
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
