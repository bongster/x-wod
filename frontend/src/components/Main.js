import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './Main.css';
import Layout from './layouts';

import Login from './Login';
import Home from './Home';
import WOD from './WOD';
import Record from './Record';
import Records from './Records';

function PrivateRoute({ component: Component, authed, ...rest }) {
  console.log(authed)
  return (
    <Route
      {...rest}
      render={(props) => authed
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function Main() {
  const auth = window.localStorage.getItem('auth')
  console.log(auth)
  let authed = false;
  if (auth) {
    const pasedAuth = JSON.parse(auth)
    authed = pasedAuth.email === "bongster88@gmail.com"
  }
  return (
    <div>
      {/* <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="#" className="text-white">Like on Facebook</a></li>
                  <li><a href="#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              <strong>Album</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header> */}
      <Layout>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute authed={authed} path="/wods" component={WOD}></PrivateRoute>
        <PrivateRoute authed={authed} path="/records" component={Records}></PrivateRoute>
        <PrivateRoute authed={authed} path="/record" component={Record}></PrivateRoute>
      </Layout>
    </div>
  );
}

export default Main;
