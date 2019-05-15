import './countdown.sass';

import { duration } from 'moment';
import { h } from 'preact';
import { useSelector } from 'react-redux';

import { State } from '../../redux/reducer';

const Countdown = () => {
  const sunsetSeconds = useSelector((state: State) => state.remainSunset);

  const hours = duration(sunsetSeconds, 'seconds').hours();
  const minutes = duration(sunsetSeconds, 'seconds').minutes();
  const seconds = duration(sunsetSeconds, 'seconds').seconds();

  return (
    <section className="countdown">
      <span className="countdown__number">{hours}</span>
      <span className="countdown__letter">h</span>
      <span className="countdown__number">
        {minutes < 10 ? `0${minutes}` : minutes}
      </span>
      <span className="countdown__letter">m</span>
      <span className="countdown__number">
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
      <span className="countdown__letter">s</span>
    </section>
  );
};

export default Countdown;
