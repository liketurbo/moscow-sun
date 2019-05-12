import { Moment } from 'moment';

const getUrl = (date: Moment) =>
  `https://api.sunrise-sunset.org/json?lat=55.7504461&lng=37.6174943&date=${date.format(
    'YYYY-MM-DD'
  )}&formatted=0`;

export default getUrl;
