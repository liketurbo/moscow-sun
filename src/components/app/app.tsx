import './app.sass';

import { Fragment, h } from 'preact';

import useFetch from '../../utils/use-fetch';
import Countdown from '../countdown/countdown';
import Header from '../header/header';
import Loading from '../loading/loading';
import Sun from '../sun/sun';

const App = () => {
  const { data, loading } = useFetch(
    'https://api.sunrise-sunset.org/json?lat=55.7504461&lng=37.6174943&date=today&formatted=0'
  );

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
        <Countdown date={data.sunset} />
        <section className="suns">
          <Sun time={data.sunrise} name="Sunrise" />
          <Sun time={data.sunset} name="Sunset" />
        </section>
      </main>
    </Fragment>
  );
};

export default App;
