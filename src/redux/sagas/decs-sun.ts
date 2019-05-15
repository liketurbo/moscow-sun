import { put, select } from 'redux-saga/effects';

import { _DECR_SUN, _SET_SUN } from '../actions';

function* decsSun() {
  const remainSunrise = yield select(state => state.remainSunrise);
  const remainSunset = yield select(state => state.remainSunrise);

  if (remainSunrise <= 0 || remainSunset <= 0) {
    yield put({ type: _SET_SUN });
  }

  yield put({ type: _DECR_SUN });
}

export default decsSun;
