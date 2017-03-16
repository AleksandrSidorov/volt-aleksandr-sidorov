// For redux-saga generator support
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'react-select/dist/react-select.css';

import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <div>Place your application here</div>
  </Provider>,
  document.getElementById('app-root')
);
