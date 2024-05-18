import { useEffect, useMemo, useState } from 'react';
import Logo from 'components/common/logo/Logo';
import Nav from 'components/header/Nav';
import useScroll from 'hooks/useScroll';
import { ReactComponent as NavIconTop } from 'assets/image/common/nav-icon-top.svg';
import { ReactComponent as NavIconBottom } from 'assets/image/common/nav-icon-bottom.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const router = useLocation();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const scroll = useScroll();
  const logoColor = useMemo(() => (scroll.scrollDir === 'up' ? '#000' : '#fff'), [scroll.scrollDir]);
  const isMain = useMemo(() => (router.pathname === '/' ? true : false), [router]);

  const onClickNavBtn = () => {
    setIsNavOpen(true);
  };

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <header className={`Header ${isMain ? scroll.scrollDir : 'sub'}`}>
      <div className='Header__inner'>
        <Logo fill={isMain ? logoColor : '#000'} />
        <button className='Header__btn--nav' onClick={onClickNavBtn}>
          <NavIconTop fill={isMain ? logoColor : '#000'} />
          <NavIconBottom fill={isMain ? logoColor : '#000'} />
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
