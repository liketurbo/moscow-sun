import './header.sass';

import moment, { Moment } from 'moment';
import { h } from 'preact';

const getTimezone = (date: Moment) => {
  const match = date.format('Z').match(/(\+).([1-9])/)!;

  return `(GMT${match[1]}${match[2]})`;
};

const Header = () => (
  <header>
    <time dateTime={moment().toISOString()}>
      {moment().format('dddd, MMMM D, YYYY')} {getTimezone(moment())}
    </time>
    {', '}
    <span>Moscow</span>
  </header>
);

export default Header;
