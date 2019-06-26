import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    window.localStorage.removeItem('auth')
    console.log(this.props.hisotry)
    alert('test')
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <Link className="navbar-brand mr-auto mr-lg-0" to="/">Home</Link>
          <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink  to="/wods" className="nav-link" activeClassName="active"> WOD </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/records" className="nav-link" activeClassName="active"> Records </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/record" className="nav-link" activeClassName="active"> Record </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
              <button className="btn btn-outline-danger my-2 my-sm-0" onClick={this.handleSignout}>Signout</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header);