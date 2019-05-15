import { takeEvery } from 'redux-saga/effects';

import { DECR_SUN, SET_SUN } from '../actions';
import decsSun from './decs-sun';
import setSun from './set-sun';

export default function* sagas() {
  yield takeEvery(SET_SUN, setSun);
  yield takeEvery(DECR_SUN, decsSun);
}
