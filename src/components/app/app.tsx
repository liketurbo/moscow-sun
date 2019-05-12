import './app.sass';

import moment from 'moment';
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Countdown from '../countdown/countdown';
import Header from '../header/header';
import Loading from '../loading/loading';
import Sun from '../sun/sun';

const App = () => {
  const [loading, setLoading] = useState(true);

  const [sunrise, setSunrise] = useState({ human: '', machine: '' });
  const [sunset, setSunset] = useState({ human: '', machine: '' });

  // @ts-ignore
  useEffect(async () => {
    const res = await fetch(
      'https://api.sunrise-sunset.org/json?lat=55.7504461&lng=37.6174943&date=today&formatted=0'
    );
    const data = await res.json();

    await setSunrise({
      human: moment(data.results.sunrise).format('h:mm A'),
      machine: data.results.sunrise
    });
    await setSunset({
      human: moment(data.results.sunset).format('h:mm A'),
      machine: data.results.sunset
    });

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Fragment>
        <Header />
        <main>
          <Loading />
        </main>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Header />
      <main>
        <Countdown sunriseTime={sunrise.machine} sunsetTime={sunset.machine} />
        <section className="suns">
          <Sun time={sunrise} name="Sunrise" />
          <Sun time={sunset} name="Sunset" />
        </section>
      </main>
    </Fragment>
  );
};

export default App;
