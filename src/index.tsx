import moment, { Moment } from 'moment';
import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const getTimezone = (date: Moment) => {
  const match = date.format('Z').match(/(\+).([1-9])/)!;

  return `(GMT${match[1]}${match[2]})`;
};

const App = () => {
  const [sunrise, setSunrise] = useState({ human: '', machine: '' });
  const [sunset, setSunset] = useState({ human: '', machine: '' });

  // @ts-ignore
  useEffect(async () => {
    const res = await fetch(
      'https://api.sunrise-sunset.org/json?lat=55.7504461&lng=37.6174943&date=today&formatted=0'
    );
    const data = await res.json();

    setSunrise({
      human: moment(data.results.sunrise).format('h:mm A'),
      machine: data.results.sunrise
    });
    setSunset({
      human: moment(data.results.sunset).format('h:mm A'),
      machine: data.results.sunset
    });
  }, []);

  return (
    <main>
      <time dateTime={moment().toISOString()}>
        {moment().format('dddd, MMMM D, YYYY')} {getTimezone(moment())}
      </time>
      {', '}
      <span>Moscow</span>
      <br />
      <time dateTime={sunrise.machine}>{sunrise.human}</time>
      <br />
      <time dateTime={sunset.machine}>{sunset.human}</time>
    </main>
  );
};

render(<App />, document.body);
