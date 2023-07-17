import Logo from 'components/common/logo/Logo';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__inner'>
        <Logo fill='#fff' />
        <button className='Header__btn--nav'>
          <NavIcon />
        </button>
        <a href='#' className='Header__btn--contact'>
          contact
        </a>
      </div>
    </header>
  );
};

export default Header;
