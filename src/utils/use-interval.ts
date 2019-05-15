import { useEffect, useRef } from 'preact/hooks';

const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef() as any;

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // @ts-ignore Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
