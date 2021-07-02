import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Home from './screens/home'
import Details from './screens/details'

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Details></Details>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
