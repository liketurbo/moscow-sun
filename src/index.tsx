import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const App = () => {
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  // @ts-ignore
  useEffect(async () => {
    const res = await fetch(
      'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today'
    );
    const data = await res.json();

    setSunrise(data.results.sunrise);
    setSunset(data.results.sunset);
  });

  return (
    <main>
      <span>{sunrise}</span> | <span>{sunset}</span>
    </main>
  );
};

render(<App />, document.body);
