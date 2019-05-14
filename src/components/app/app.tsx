import './app.sass';

import moment from 'moment';
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useSelector } from 'react-redux';

import fetchSun from '../../utils/fetch-sun';
import getUrl from '../../utils/get-url';
import Countdown from '../countdown/countdown';
import Header from '../header/header';
import Loading from '../loading/loading';
import Sun from '../sun/sun';

const App = () => {
  const [current, setCurrent] = useState({
    sunset: '',
    sunrise: ''
  });
  const [loading, setLoading] = useState(true);

  //@ts-ignore
  useEffect(async () => {
    const now = moment();
    let resp = await fetchSun(getUrl(now));

    if (moment().isAfter(resp.sunset)) {
      resp = await fetchSun(getUrl(now.add(1, 'day')));
    }

    setCurrent({ sunrise: resp.sunrise, sunset: resp.sunset });
    setLoading(false);
  }, []);

  const seconds = useSelector((state: any) => state.seconds);

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
        {seconds}
        <Countdown time={current.sunset} />
        <section className="suns">
          <Sun time={current.sunrise} name="Sunrise" />
          <Sun time={current.sunset} name="Sunset" />
        </section>
      </main>
    </Fragment>
  );
};

export default App;
