import { useState } from 'react';
import Logo from 'components/common/logo/Logo';
import { menu, info } from 'components/header/menu';
import { Social, Credit } from 'components/common/social/Social';
import NavBgImg from 'components/header/NavBgImg';

import { NavPropsType } from 'components/header/type';
import { ReactComponent as CLOSE } from 'assets/image/common/close.svg';

const Nav: React.FC<NavPropsType> = ({ open, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<number>(0);

  const onClickNavBtn = () => {
    setOpen(false);
  };

  return (
    <div className={`Nav ${open && `open`}`}>
      <nav className='Nav__inner'>
        <div className='Nav__header'>
          <Logo fill='#000' />
          <button className='Nav__btn--nav' onClick={onClickNavBtn}>
            <CLOSE />
          </button>
          <a href='#' className='Nav__btn--contact'>
            contact
          </a>
        </div>
        <NavBgImg active={activeMenu} />
        <div className='Nav__menu-container'>
          <ul className='Nav__menu-list'>
            {menu.map((el, idx) => {
              return (
                <li className='Nav__menu-item' onMouseEnter={() => setActiveMenu(idx + 1)} onMouseLeave={() => setActiveMenu(0)}>
                  <a href={el.link}>{el.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='Nav__footer'>
          <div className='Nav__link-container'>
            <Social />
            <Credit />
          </div>
          <ul className='Nav__footer-info'>
            {info.map((el) => {
              return (
                <li className='Nav__footer-info-item'>
                  <a href={el.link}>{el.title}</a>
                </li>
              );
            })}
            <li className='Nav__footer-info-copy'>© 2023 Craft</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
