import Main from 'components/main/Main';
import Introduce from 'components/introduce/Introduce';
import { useEffect, useState } from 'react';
import useScroll from 'hooks/useScroll';

const Home = () => {
  const [scene, setScene] = useState(0);
  const [isPreventScroll, setIsPreventScroll] = useState(false);
  const scroll = useScroll();

  useEffect(() => {
    console.log(scroll.scroll, scroll.scrollDir);
    if (scroll.scroll > 10 && scroll.scrollDir === 'down') {
      setScene(1);
    } else if (scroll.scroll < 50 && scroll.scrollDir !== 'down') {
      setScene(0);
    }
  }, [scroll.scroll, scroll.scrollDir]);

  const sectionTransitionEvent = (e: WheelEvent) => {
    // const scroll =
    // if ()
  };

  const changeSection = (scrollDir: 'up' | 'down' | 'top', scene: number) => {
    console.log(scrollDir, scene);
  };

  // useEffect(() => {
  //   document.addEventListener('wheel', () => {sectionTransitionEvent()}, { passive: false });

  //   return () => {
  //     document.removeEventListener('wheel', sectionTransitionEvent);
  //   };
  // }, []);

  return (
    <section className='Home' data-scene={scene}>
      <Main />
      <Introduce />
    </section>
  );
};

export default Home;
