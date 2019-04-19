import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Departure from '../Departure/Departure';
import Arrival from '../Arrival/Arrival.jsx';
import './App.css';

import NavButtons from "../NavButtons/NavButtons";

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
 