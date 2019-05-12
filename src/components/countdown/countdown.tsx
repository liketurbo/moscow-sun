import './countdown.css';

import delay from 'delay';
import moment from 'moment';
import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface CountdownProps {
  sunriseTime: string;
  sunsetTime: string;
}

const Countdown: FunctionalComponent<CountdownProps> = ({ sunsetTime }) => {
  const [delayAmount, setDelayAmount] = useState(0);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const end = moment(sunsetTime);

  // @ts-ignore
  useEffect(async () => {
    await delay(delayAmount);

    const now = moment();

    setHours(end.diff(now, 'hours') % 24);
    setMinutes(end.diff(now, 'minutes') % 60);
    setSeconds(end.diff(now, 'seconds') % 60);

    if (delayAmount === 0) setDelayAmount(1000);
  }, [seconds]);

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
