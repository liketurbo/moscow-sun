import moment from 'moment';
import { call, put } from 'redux-saga/effects';

import fetchSunAPI from '../../utils/fetch-sun-api';
import { _SET_LOADING, _SET_SUN } from '../actions';

function* setSun() {
  try {
    yield put({ type: _SET_LOADING, payload: true });

    const todayData = yield call(() => fetchSunAPI('today'));
    const now = moment();

    // Case from sunset till midnight
    if (moment().isAfter(todayData.sunset)) {
      const tomorrowData = yield call(() => fetchSunAPI('tomorrow'));

      yield put({
        type: _SET_SUN,
        payload: {
          sunrise: tomorrowData.sunrise,
          remainSunrise: moment(tomorrowData.sunrise).diff(now, 'seconds'),
          isNextSunrise: true,
          sunset: tomorrowData.sunset,
          remainSunset: moment(tomorrowData.sunset).diff(now, 'seconds'),
          isNextSunset: true
        }
      });
    }
    // Case from sunrise till sunset
    else if (moment().isAfter(todayData.sunrise)) {
      const tomorrowData = yield call(() => fetchSunAPI('tomorrow'));

      yield put({
        type: _SET_SUN,
        payload: {
          sunrise: tomorrowData.sunrise,
          remainSunrise: moment(tomorrowData.sunrise).diff(now, 'seconds'),
          isNextSunrise: true,
          sunset: todayData.sunset,
          remainSunset: moment(todayData.sunset).diff(now, 'seconds'),
          isNextSunset: false
        }
      });
    }
    // Case from midnight till sunrise
    else {
      yield put({
        type: _SET_SUN,
        payload: {
          sunrise: todayData.sunrise,
          remainSunrise: moment(todayData.sunrise).diff(now, 'seconds'),
          isNextSunrise: false,
          sunset: todayData.sunset,
          remainSunset: moment(todayData.sunset).diff(now, 'seconds'),
          isNextSunset: false
        }
      });
    }

    yield put({ type: _SET_LOADING, payload: false });
  } catch (err) {}
}

export default setSun;
