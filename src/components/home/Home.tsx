import { useEffect, useRef, useState } from 'react';
import useScroll from 'hooks/useScroll';
import Intro from 'components/intro/Intro';
import Main from 'components/main/Main';
import Introduce from 'components/introduce/Introduce';
import { setBodyPreventScroll } from 'util/index';

const Home = () => {
  const [scene, setScene] = useState(-1);
  const [isPreventScroll, setIsPreventScroll] = useState(true);
  const timerRef = useRef(null);
  const scroll = useScroll();

  const changeScene = (scene: number) => {
    setScene(scene);
    setTimeout(() => {
      setIsPreventScroll(false);
      timerRef.current = null;
    }, 1500);
  };

  // FUNCTION 스크롤 방향에 따른 scene 제어
  useEffect(() => {
    if (timerRef.current) return;
    const introTop = document
      .querySelector('.Main')
      .getBoundingClientRect().height;
    if (scene === 0 && scroll.scroll > 10 && scroll.scrollDir === 'down') {
      setIsPreventScroll(true);
      setScene(0.5);
      timerRef.current = setTimeout(() => {
        changeScene(1);
      }, 1000);
    } else if (
      scene === 1 &&
      scroll.scroll < introTop - 50 &&
      scroll.scrollDir !== 'down'
    ) {
      setIsPreventScroll(true);
      setScene(0.5);
      timerRef.current = setTimeout(() => {
        changeScene(0);
      }, 1000);
    }
  }, [scroll.scroll, scroll.scrollDir, scene]);

  // FUNCTION body scroll 가능여부 제어
  useEffect(() => {
    if (isPreventScroll) {
      setBodyPreventScroll(true);
    } else {
      setBodyPreventScroll(false);
    }
  }, [isPreventScroll, setBodyPreventScroll]);

  // FUNCTION scene이 변경되었을 때 스크롤 이동
  useEffect(() => {
    if (scene === 0) {
      window.scrollTo({ top: 0 });
    } else if (scene === 1) {
      document.querySelector('.Introduce').scrollIntoView();
    }
  }, [scene]);

  // FUNCTION 3초 간 인트로
  useEffect(() => {
    setTimeout(() => {
      setScene(0);
      setIsPreventScroll(false);
    }, 3000);
  }, []);

  return (
    <section className='Home' data-scene={scene}>
      <h1 className='sound-only'>Craftcharter</h1>
      {scene === -1 && <Intro />}
      <Main active={scene === 0} />
      <Introduce active={scene === 1} />
    </section>
  );
};

export default Home;
