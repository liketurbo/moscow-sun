import './sun.sass';

import moment from 'moment';
import { FunctionalComponent, h } from 'preact';

interface SunProps {
  time: string;
  name: string;
}

const Sun: FunctionalComponent<SunProps> = ({ time, name }) => (
  <article className="sun">
    <time className="sun__time" dateTime={time}>
      {moment(time).format('h:mm A')}
    </time>
    <span className="sun__name">{name}</span>
  </article>
);

export default Sun;
