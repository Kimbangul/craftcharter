import { useMemo, useState } from 'react';
import Logo from 'components/common/logo/Logo';
import Nav from 'components/header/Nav';
import useScroll from 'hooks/useScroll';
import { ReactComponent as NavIconTop } from 'assets/image/common/nav-icon-top.svg';
import { ReactComponent as NavIconBottom } from 'assets/image/common/nav-icon-bottom.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const scroll = useScroll();
  const logoColor = useMemo(() => (scroll.scrollDir === 'up' ? '#000' : '#fff'), [scroll.scrollDir]);

  const onClickNavBtn = () => {
    setIsNavOpen(true);
  };

  return (
    <header className={`Header ${scroll.scrollDir}`}>
      <div className='Header__inner'>
        <Logo fill={logoColor} />
        <button className='Header__btn--nav' onClick={onClickNavBtn}>
          <NavIconTop fill={logoColor} />
          <NavIconBottom fill={logoColor} />
        </button>
        <Link to='/contact' className='Header__btn--contact'>
          contact
        </Link>
      </div>
      <Nav open={isNavOpen} setOpen={setIsNavOpen} />
    </header>
  );
};

export default Header;
