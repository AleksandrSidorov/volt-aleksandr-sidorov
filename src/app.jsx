// For redux-saga generator support
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/App';

import 'react-select/dist/react-select.css';

import configureStore from './configureStore';
import rootSaga from './Customers/sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app-root')
);
