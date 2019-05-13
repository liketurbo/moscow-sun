import './countdown.sass';

import moment from 'moment';
import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';

interface CountdownProps {
  time: string;
}

const Countdown: FunctionalComponent<CountdownProps> = ({ time }) => {
  let now = new Date();
  const end = moment(time);

  const [hours, setHours] = useState(end.diff(now, 'hours') % 24);
  const [minutes, setMinutes] = useState(end.diff(now, 'minutes') % 60);
  const [seconds, setSeconds] = useState(end.diff(now, 'seconds') % 60);

  setInterval(() => {
    now = new Date();

    setHours(end.diff(now, 'hours') % 24);
    setMinutes(end.diff(now, 'minutes') % 60);
    setSeconds(end.diff(now, 'seconds') % 60);
  }, 1000);

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
