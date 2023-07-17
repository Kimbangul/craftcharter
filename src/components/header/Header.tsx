import Logo from 'components/common/logo/Logo';
import { ReactComponent as NavIcon } from 'assets/image/common/nav-icon.svg';

const Header = () => {
  return (
    <header className='Header'>
      <Logo />
      <button>
        {/* <img src={NavIcon} alt='' fill=''//> */}
        <NavIcon fill='#000' />
      </button>
      <button className='Header__btn--contact'>CONTACT</button>
    </header>
  );
};

export default Header;
