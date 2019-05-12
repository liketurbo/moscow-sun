import './sun.sass';

import { FunctionalComponent, h } from 'preact';

interface SunProps {
  time: {
    human: string;
    machine: string;
  };
  name: string;
}

const Sun: FunctionalComponent<SunProps> = ({ time, name }) => (
  <article className="sun">
    <time className="sun__time" dateTime={time.machine}>
      {time.human}
    </time>
    <span className="sun__name">{name}</span>
  </article>
);

export default Sun;
