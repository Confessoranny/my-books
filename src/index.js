import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Routes from './Routes';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle whiteColor />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
