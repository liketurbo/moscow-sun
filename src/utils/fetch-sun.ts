const fetchSun = async (
  url: string
): Promise<{ sunrise: string; sunset: string }> => {
  const resp = await fetch(url);
  const data = await resp.json();

  return data.results;
};

export default fetchSun;
