import moment, { Moment } from 'moment';

const getUrl = (date: Moment) =>
  `https://api.sunrise-sunset.org/json?lat=55.7504461&lng=37.6174943&date=${date.format(
    'YYYY-MM-DD'
  )}&formatted=0`;

const fetchSunAPI = async (date: 'today' | 'tomorrow') => {
  const resp = await fetch(
    getUrl(date === 'today' ? moment() : moment().add(1, 'day'))
  );
  const data = await resp.json();

  return data.results;
};

export default fetchSunAPI;
