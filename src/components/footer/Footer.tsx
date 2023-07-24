import Logo from 'components/common/logo/Logo';
import { footerMenu, infoMenu } from 'components/footer/menu';
import { Social, Credit } from 'components/common/social/Social';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__header'>
        <Logo fill='#000' />
        <nav className='Footer__nav'>
          <ul>
            {footerMenu.map((el, idx) => {
              return (
                <li className='Footer__nav-item' key={`ftmenu${idx}`}>
                  <a href={el.link}>{el.title}</a>
                </li>
              );
            })}
          </ul>
          <a href='#' className='Footer__btn--round'>
            contact
          </a>
        </nav>
      </div>
      <hr />
      <div className='Footer__bottom'>
        <div className='Footer__link-container'>
          <Social />
          <Credit />
        </div>
        <ul className='Footer__info'>
          {infoMenu.map((el, idx) => {
            return (
              <li className='Footer__info-item' key={`ftinfo${idx}`}>
                <a href={el.link}>{el.title}</a>
              </li>
            );
          })}
          <li className='Footer__info-copy'>© 2023 Craft</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
