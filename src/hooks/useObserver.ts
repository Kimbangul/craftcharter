import { useCallback, useEffect, useRef, useState } from 'react';

function useObserver(callback: (param?: any) => any, option?: IntersectionObserverInit) {
  const [observer, setObserver] = useState<null | IntersectionObserverEntry>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const targetRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // if (entries[0].isIntersecting) {
        //   callback();
        // }
        callback(entries);
      },
      { ...option }
    );

    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return {
    target: targetRef,
  };
}

export default useObserver;
