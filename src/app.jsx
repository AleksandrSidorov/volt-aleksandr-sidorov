// For redux-saga generator support
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fork } from 'redux-saga/effects';

import App from './App/App';

import 'react-select/dist/react-select.css';

import configureStore from './configureStore';
import customersSaga from './Customers/sagas';
import productsSaga from './Products/sagas';

function* daSaga() {
  yield [
    fork(customersSaga),
    fork(productsSaga)
  ]
}

const store = configureStore();
store.runSaga(daSaga);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app-root')
);
