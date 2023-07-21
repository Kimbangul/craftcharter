import MENU01 from 'assets/image/header/menu01.webp';
import MENU02 from 'assets/image/header/menu02.webp';
import MENU03 from 'assets/image/header/menu03.webp';
import MENU04 from 'assets/image/header/menu04.webp';
import MENU05 from 'assets/image/header/menu05.webp';
import MENU06 from 'assets/image/header/menu06.webp';

import { NavBgImgPropsType } from 'components/header/type';

const NavBgImg: React.FC<NavBgImgPropsType> = ({ active }) => {
  const menuList = [MENU01, MENU02, MENU03, MENU04, MENU05, MENU06];

  return (
    <div className='Nav__img-container'>
      <img src={menuList[active]} alt='' />
    </div>
  );
};

export default NavBgImg;
