import './app.sass';

import { Fragment, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import { DECR_SUN, SET_SUN } from '../../redux/actions';
import { State } from '../../redux/reducer';
import useInterval from '../../utils/use-interval';
import Countdown from '../countdown/countdown';
import Header from '../header/header';
import Loading from '../loading/loading';
import Sun from '../sun/sun';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state: State) => state.loading);
  const sunrise = useSelector((state: State) => state.sunrise);
  const sunset = useSelector((state: State) => state.sunset);

  useEffect(() => dispatch({ type: SET_SUN }), []);
  useInterval(() => dispatch({ type: DECR_SUN }), loading ? null : 1000);

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
        <Countdown />
        <section className="suns">
          <Sun time={sunrise} name="Sunrise" />
          <Sun time={sunset} name="Sunset" />
        </section>
      </main>
    </Fragment>
  );
};

export default App;
