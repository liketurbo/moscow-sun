import { h, render } from 'preact';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducer';
import sagas from './redux/sagas';
import Home from './views/home/home';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
  <Provider {...{ store }}>
    <Home />
  </Provider>,
  document.body
);
