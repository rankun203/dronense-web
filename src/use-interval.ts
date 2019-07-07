import { useRef, useEffect } from 'react';

export function useInterval(callback: Function, delay?: number) {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback as any;
  });

  useEffect(() => {
    function tick() {
      (savedCallback as any).current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
