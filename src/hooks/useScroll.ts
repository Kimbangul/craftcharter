import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down' | 'top'>('top');

  // FUNCTION 현재 스크롤 저장
  const onScrollDoc = () => {
    setScroll(document.scrollingElement?.scrollTop || 0);
  };

  //  FUNCTION 스크롤 감지
  useEffect(() => {
    if (!document) return;
    document.addEventListener('scroll', onScrollDoc);

    return () => document.removeEventListener('scroll', onScrollDoc);
  }, []);

  // FUNCTION 스크롤 방향 설정
  useEffect(() => {
    if (scroll === 0) {
      setScrollDir('top');
      return;
    }
    if (prevScroll < scroll) {
      setScrollDir('down');
    } else if (prevScroll > scroll) {
      setScrollDir('up');
    }
    setPrevScroll(scroll);
  }, [scroll]);

  return { scroll, setScroll, prevScroll, setPrevScroll, scrollDir, setScrollDir };
};

export default useScroll;
