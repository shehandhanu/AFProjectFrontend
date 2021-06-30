import React from 'react';
import { render } from 'react-dom';
import App from './app';

import { Provider } from 'react-redux'
import data from './API/Data'

render(
     <Provider store={data}>
          <App/>
     </Provider>, document.getElementById('app')
);