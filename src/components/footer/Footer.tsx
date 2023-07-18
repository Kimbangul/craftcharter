import Logo from 'components/common/logo/Logo';
import { footerMenu, infoMenu, socialMenu } from 'components/footer/menu';

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
        <div className='Footer__link-container'>
          <ul className='Footer__social'>
            {socialMenu.map((el) => {
              return (
                <li className='Footer__social-item'>
                  <a href={el.link}>
                    <>
                      <span className='sound-only'>{el.title}</span>
                      {<el.icon />}
                    </>
                  </a>
                </li>
              );
            })}
          </ul>
          <a className='Footer__credit' href="#">
            <span>Website credits</span>
            <span>Crafted by Ryze</span>
          </a>
        </div>
        <ul className='Footer__info'>
          {infoMenu.map((el) => {
            return (
              <li className='Footer__info-item'>
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
