import { put, select } from 'redux-saga/effects';

import { _DECR_SUN, SET_SUN } from '../actions';

function* decsSun() {
  const [remainSunrise, remainSunset] = yield select(state => [
    state.remainSunrise,
    state.remainSunset
  ]);

  if (remainSunrise <= 0 || remainSunset <= 0) {
    yield put({ type: SET_SUN });
  }

  yield put({ type: _DECR_SUN });
}

export default decsSun;
