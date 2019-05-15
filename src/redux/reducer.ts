import { _SET_SUN } from './actions';

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
      return { ...payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
