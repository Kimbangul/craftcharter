import Logo from 'components/common/logo/Logo';
import { footerMenu, infoMenu } from 'components/footer/menu';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__header'>
        <Logo fill='#000' />
        <nav className='Footer__nav'>
          <ul>
            {footerMenu.map((el) => {
              return (
                <li className='Footer__nav-item'>
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
        <ul className='Footer__social'>
          <li></li>
        </ul>
        <ul className='Footer__info'>
          {infoMenu.map((el) => {
            return (
              <li className='Footer__info-item'>
                <a href={el.link}>{el.title}</a>
              </li>
            );
          })}
          <li className='Footer__info-item'>© 2023 Craft</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
