import { useState } from 'react';
import Logo from 'components/common/logo/Logo';
import Nav from 'components/header/Nav';
import useScroll from 'hooks/useScroll';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const scroll = useScroll();

  const onClickNavBtn = () => {
    setIsNavOpen(true);
  };

  return (
    <header className={`Header ${scroll.scrollDir}`}>
      <div className='Header__inner'>
        <Logo fill={scroll.scrollDir === 'up' ? '#000' : '#fff'} />
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
