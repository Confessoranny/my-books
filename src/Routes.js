import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './screens/home'
import Details from './screens/details'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  )
}

export default App;