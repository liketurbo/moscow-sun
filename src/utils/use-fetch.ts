import { useEffect, useState } from 'preact/hooks';

const useFetch = (url: string): any => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // @ts-ignore
  useEffect(async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setData(data.results);
      setLoading(false);
    } catch (err) {
      setData(null);
      setLoading(false);
    }
  });

  return {
    data,
    loading
  };
};

export default useFetch;
