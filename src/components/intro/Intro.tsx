import Lottie from 'lottie-react';
import LOADING from 'assets/lottie/loading.json';

const Intro = () => {
  return (
    <div className='Intro'>
      <div className='Intro__logo'>
        <Lottie animationData={LOADING} />
      </div>
    </div>
  );
};

export default Intro;
