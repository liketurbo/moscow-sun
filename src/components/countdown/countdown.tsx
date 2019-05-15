import './countdown.sass';

import { duration } from 'moment';
import { Fragment, FunctionalComponent, h } from 'preact';

interface CountdownProps {
  seconds: number;
}

const Countdown: FunctionalComponent<CountdownProps> = ({ seconds }) => {
  const days = duration(seconds, 'seconds').days();
  const hours = duration(seconds, 'seconds').hours();
  const min = duration(seconds, 'seconds').minutes();
  const sec = duration(seconds, 'seconds').seconds();

  return (
    <section className="countdown">
      {days ? (
        <Fragment>
          <span className="countdown__number">{days}</span>
          <span className="countdown__letter">d</span>
        </Fragment>
      ) : null}
      {days || hours ? (
        <Fragment>
          <span className="countdown__number">{hours}</span>
          <span className="countdown__letter">h</span>
        </Fragment>
      ) : null}
      {days || hours || min ? (
        <Fragment>
          <span className="countdown__number">
            {min < 10 ? `0${min}` : min}
          </span>
          <span className="countdown__letter">m</span>
        </Fragment>
      ) : null}
      <span className="countdown__number">{sec < 10 ? `0${sec}` : sec}</span>
      <span className="countdown__letter">s</span>
    </section>
  );
};

export default Countdown;
