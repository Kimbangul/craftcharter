import FOOTER_BG from '../../assets/video/footer-bg.mp4';

const Contact = () => {
  return (
    <section className='Contact'>
      <div className='Contact__text'>
        <p>Proud to Craft your journey</p>
        <a className='Contact__btn--round' href='#'>
          contact us
        </a>
      </div>
      <video className='Contact__video' autoPlay={true} muted loop playsInline>
        <source src={FOOTER_BG} />
      </video>
    </section>
  );
};

export default Contact;
