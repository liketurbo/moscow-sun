import produce from 'immer';

import { _SET_SUN } from './actions';

const defaultState = {
  sunrise: '',
  sunset: '',
  secSunrise: 0,
  secSunset: 0,
  loading: true
};

export type State = typeof defaultState;
type Action = {
  type: string;
  payload: any;
};

const reducer = (state = defaultState, { type, payload }: Action) => {
  // TODO Actions
  switch (type) {
    case _SET_SUN:
      return produce(state, draft => {
        draft.sunset = payload.sunset;
        draft.sunrise = payload.sunrise;

        draft.loading = false;
      });

    default:
      return state;
  }
};

export default reducer;
