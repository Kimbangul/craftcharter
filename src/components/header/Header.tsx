import Logo from 'components/common/logo/Logo';
import Nav from 'components/header/Nav';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__inner'>
        <Logo fill='#fff' />
        <button className='Header__btn--nav'>
          <NavIcon fill='#fff' />
        </button>
        <a href='#' className='Header__btn--contact'>
          contact
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
