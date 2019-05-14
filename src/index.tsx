import { h, render } from 'preact';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/app/app';
import reducer from './redux/reducer';
import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.body
);
