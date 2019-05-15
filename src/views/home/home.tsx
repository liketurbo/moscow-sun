import './home.sass';

import { Fragment, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import Countdown from '../../components/countdown/countdown';
import Header from '../../components/header/header';
import Loading from '../../components/loading/loading';
import Sun from '../../components/sun/sun';
import { DECR_SUN, SET_SUN } from '../../redux/actions';
import { State } from '../../redux/reducer';
import useInterval from '../../utils/use-interval';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state: State) => state.loading);
  const sunrise = useSelector((state: State) => state.sunrise);
  const sunset = useSelector((state: State) => state.sunset);
  const remainSunset = useSelector((state: State) => state.remainSunset);

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
        <Countdown seconds={remainSunset} />
        <section className="suns">
          <Sun time={sunrise} name="Sunrise" />
          <Sun time={sunset} name="Sunset" />
        </section>
      </main>
    </Fragment>
  );
};

export default App;
