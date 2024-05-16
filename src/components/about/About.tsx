import Lottie from 'lottie-react';
import ABOUT_BG01 from 'assets/image/about/about_bg01.webp';
import ABOUT_BG02 from 'assets/image/about/about_bg02.jpeg';
import METER from 'assets/lottie/meter.json';

const About = () => {
  return (
    <section className='About'>
      <div className='About__img-container' data-column='4'>
        <img src={ABOUT_BG01} alt='' />
      </div>
      <div className='About__text-container'>
        <h2 className='About__title'>We’re crafting the most exceptional experience in private aviation</h2>
        <div className='About__desc-container'>
          <p className='About__desc'>
            We recognised an opportunity in private flight to create a service that went beyond the expected. From our obsessive attention to detail, unwavering
            consistency and quality of fleet, Craft are taking your greatest expectations even higher.
          </p>
          <p className='About__desc'>
            Our passion and integrity is what sustains and develops our long-lasting relationships with our discerning guests, private brokers and aircraft
            owners.
          </p>
        </div>
        <div className='About__btn'>
          <a href='#'>About Craft</a>
        </div>
      </div>
      <div className='About__svg-container'>
        <Lottie animationData={METER} loop={true} />
      </div>
      <div className='About__img-container' data-column='2'>
        <img src={ABOUT_BG02} alt='' />
      </div>
    </section>
  );
};

export default About;
