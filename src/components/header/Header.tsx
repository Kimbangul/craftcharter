import { useState, useEffect, useCallback } from 'react';
import Logo from 'components/common/logo/Logo';
import Nav from 'components/header/Nav';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'top'>('top');

  const onClickNavBtn = () => {
    setIsNavOpen(true);
  };

  const onScrollDoc = () => {
    setScroll(document.scrollingElement?.scrollTop || 0);
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener('scroll', onScrollDoc);

    return () => document.removeEventListener('scroll', onScrollDoc);
  }, []);

  useEffect(() => {
    if (scroll === 0) {
      setScrollDir('top');
      return;
    }
    if (prevScroll < scroll) {
      setScrollDir('down');
    } else if (prevScroll > scroll) {
      setScrollDir('up');
    }
    setPrevScroll(scroll);
  }, [scroll]);

  return (
    <header className={`Header ${scrollDir}`}>
      <div className='Header__inner'>
        <Logo fill={scrollDir === 'up' ? '#000' : '#fff'} />
        <button className='Header__btn--nav' onClick={onClickNavBtn}>
          <NavIcon fill='#fff' />
        </button>
        <a href='#' className='Header__btn--contact'>
          contact
        </a>
      </div>
      <Nav open={isNavOpen} setOpen={setIsNavOpen} />
    </header>
  );
};

export default Header;
