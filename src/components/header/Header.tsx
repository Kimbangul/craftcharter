import { useState, useEffect } from 'react';
import Logo from 'components/common/logo/Logo';
import Nav from 'components/header/Nav';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'top'>('top');

  const onClickNavBtn = () => {
    setIsNavOpen(true);
  };

  const onScrollDoc = () => {
    const currentScroll = document.scrollingElement?.scrollTop;
    if (!currentScroll) return;

    console.log(scroll, currentScroll);

    if (currentScroll === 0) {
      setScrollDir('top');
      setScroll(currentScroll);
      return;
    }

    if (scroll < currentScroll) {
      setScrollDir('down');
    } else if (scroll > currentScroll) {
      setScrollDir('up');
    }
    console.log(currentScroll);
    setScroll(currentScroll);
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener('scroll', onScrollDoc);

    return () => document.removeEventListener('scroll', onScrollDoc);
  }, []);

  return (
    <header className={`Header ${scrollDir}`}>
      <div className='Header__inner'>
        <Logo fill='#fff' />
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
