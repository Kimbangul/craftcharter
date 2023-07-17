import Logo from 'components/common/logo/Logo';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  return (
    <header className='Header'>
      <Logo />
      <button className='Header__btn--nav'>
        {/* <img src={NavIcon} alt='' fill=''//> */}
        <NavIcon fill='#000' />
      </button>
      <a href='#' className='Header__btn--contact'>
        CONTACT
      </a>
    </header>
  );
};

export default Header;
