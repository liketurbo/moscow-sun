import { takeEvery } from 'redux-saga/effects';

import { SET_SUN } from '../actions';
import setSun from './set-sun';

export default function* sagas() {
  yield takeEvery(SET_SUN, setSun);
}
