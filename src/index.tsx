import { h, render } from 'preact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app/app';

render(
  <Provider
    store={createStore((state = { seconds: 1000 }) => {
      return state;
    })}
  >
    <App />
  </Provider>,
  document.body
);
