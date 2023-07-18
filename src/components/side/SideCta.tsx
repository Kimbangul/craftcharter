import { ReactComponent as ARROW } from 'assets/image/side/arrow.svg';

const SideCta = () => {
  return (
    <div className='SideCta'>
      <a href='#'>
        <p className='SideCta__text'>
          Take Flight <ARROW className='SideCta__text-icon' />
        </p>
        <p className='SideCta__text'>
          Quote <ARROW className='SideCta__text-icon' />
        </p>
      </a>
    </div>
  );
};

export default SideCta;
