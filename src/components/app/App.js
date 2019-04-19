import React, { Fragment } from 'react';
import './App.css';
import Departure from '../departure/Departure';
import Arrival from '../arrival/Arrival';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavButtons from "../navButtons/NavButtons"

const App =() => (
  <Fragment>
    <Router>
      <NavButtons/>
      <Switch>
        <Route exact path='/' component={Departure}/>
        <Route path='/arrival' component={Arrival}/>
      </Switch>
    </Router>
  </Fragment>
)

export default App;
 