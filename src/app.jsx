import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'react-select/dist/react-select.css';

render(
  <Provider store={store}>
    <div>Place your application here</div>
  </Provider>,
  document.getElementById('app-root')
);
