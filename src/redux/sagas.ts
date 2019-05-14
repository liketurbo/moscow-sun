import moment from 'moment';
import { call, put, takeEvery } from 'redux-saga/effects';

import getUrl from '../utils/get-url';
import { _SET_SUN, SET_SUN } from './actions';

function* fetchSun() {
  try {
    const { sunrise, sunset } = yield call(async () => {
      const resp = await fetch(getUrl(moment()));
      const data = await resp.json();

      return data.results;
    });

    yield put({ type: _SET_SUN, payload: { sunrise, sunset } });
  } catch (err) {}
}

export default function* sagas() {
  yield takeEvery(SET_SUN, fetchSun);
}
