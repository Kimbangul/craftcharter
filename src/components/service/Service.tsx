import { ReactComponent as ARROW } from 'assets/image/side/arrow.svg';

const Service = () => {
  return (
    <section className='Service'>
      <div className='Service__text-container'>
        <div className='Service__desti-container'>
          <ul className='Service__desti-list'>
            <li className='Service__desti-item'>ASE</li>
            <li className='Service__desti-item'>TEB</li>
            <li className='Service__desti-item'>OPF</li>
          </ul>
          <ARROW className='Service__desti-icon' />
          <ul className='Service__desti-list'>
            <li className='Service__desti-item'>VNY</li>
            <li className='Service__desti-item'>MYNN</li>
            <li className='Service__desti-item'>EGGW</li>
          </ul>
        </div>
        <h2 className='Service__title'>
          From North America
          <br /> to the world
        </h2>
        <p className='Service__desc'>
          Get closer to your destination. With a host of flying <br />
          locations, private airports and exclusive terminals - <br />
          we’ll take the interruptions out of your journey. Reliable <br />
          luxury, wherever you fly.
        </p>
        <div className='Service__btn'>
          <a href='#'>Contact us</a>
          <a href='#'>Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Service;
