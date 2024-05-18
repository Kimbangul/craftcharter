import Lottie from 'lottie-react';
import FOOTER_BG from 'assets/video/footer-bg.mp4';
import PLANE from 'assets/lottie/plane.json';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className='Contact'>
      <div className='Contact__plane-container'>
        <Lottie className='Contact__plane' animationData={PLANE} loop={true} />
      </div>
      <div className='Contact__text'>
        <h2 className='Contact__title'>Proud to Craft your journey</h2>
        <Link className='Contact__btn--round' to='/contact'>
          contact us
        </Link>
      </div>
      <video className='Contact__video' autoPlay={true} muted loop playsInline>
        <source src={FOOTER_BG} />
      </video>
    </section>
  );
};

export default Contact;
