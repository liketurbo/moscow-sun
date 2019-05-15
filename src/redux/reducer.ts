import produce from 'immer';

import { _DECR_SUN, _SET_LOADING, _SET_SUN } from './actions';

const defaultState = {
  sunrise: '',
  sunset: '',
  remainSunrise: 0,
  isNextSunrise: true,
  remainSunset: 0,
  isNextSunset: true,
  loading: true
};

export type State = typeof defaultState;
type Action = {
  type: string;
  payload: any;
};

const reducer = (state = defaultState, { type, payload }: Action) => {
  switch (type) {
    case _SET_SUN:
      return { ...state, ...payload };
    case _DECR_SUN:
      return produce(state, draft => {
        draft.remainSunrise -= 1;
        draft.remainSunset -= 1;
      });
    case _SET_LOADING:
      return produce(state, draft => {
        draft.loading = payload;
      });
    default:
      return state;
  }
};

export default reducer;
