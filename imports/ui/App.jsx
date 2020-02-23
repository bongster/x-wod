import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';


import About from './About';
import Users from './Users';
import Home from './Home';


const App = ({ links }) => (
  <Router>
    <div>
      <nav>
        {links.map(({ _id, title }) => (
          <div key={_id}>{title}</div>
        ))}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
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
