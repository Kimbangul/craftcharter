import Main from 'components/main/Main';
import Introduce from 'components/introduce/Introduce';
import { useEffect, useState } from 'react';
import useScroll from 'hooks/useScroll';

const Home = () => {
  const [scene, setScene] = useState(0);
  const [isPreventScroll, setIsPreventScroll] = useState(false);
  const scroll = useScroll();

  const changeScene = (scene: number) => {
    console.log(scene);
    setIsPreventScroll(true);
    setScene(scene);
    setTimeout(() => {
      setIsPreventScroll(false);
    }, 1500);
  };

  useEffect(() => {
    console.log(scroll.scroll, scroll.scrollDir);
    if (scene === 0 && scroll.scroll > 10 && scroll.scrollDir === 'down') {
      changeScene(1);
    } else if (scroll.scroll < 50 && scroll.scrollDir !== 'down') {
      changeScene(0);
    }
  }, [scroll.scroll, scroll.scrollDir, scene]);

  useEffect(() => {
    if (isPreventScroll) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflowY = 'visible';
    }
  }, [isPreventScroll]);

  return (
    <section className='Home' data-scene={scene}>
      <Main active={scene === 0} />
      <Introduce />
    </section>
  );
};

export default Home;
