import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';


import Workouts from './Workouts';
import Home from './Home';


const App = ({ links }) => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/workouts">
          <Workouts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default withTracker(() => {
  return {
    links: Links.find({}).fetch(),
  }
})(App);
