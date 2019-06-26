import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Login.css'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      remember: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeChk = this.handleChangeChk.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password, remember } = this.state;
    window.localStorage.setItem('auth', JSON.stringify({
      email,
      remember,
    }));
    this.props.history.push("/")

    alert(JSON.stringify({
      email,
      password,
      remember,
    }))
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChangeChk(e) {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }
  render() {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#f5f5f5",
      }}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          {this.state.email + " , " + this.state.password + " , " + this.state.remember}
          <div className="text-center mb-4">
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
            <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
          </div>

          <div className="form-label-group">
            <com-1password-op-button id="com-1password-op-button" data-op-target="0" data-state="locked" className="op-large" style={{
              marginLeft: "354px !important",
              marginTop: "13px !important",
              backgroundImage: "url(chrome-extension://aeblfdkhhhdcdjpifhhbdiojplfjncoa/images/icons/app_icon-light_bg-color-locked-16.svg) !important"
            }}></com-1password-op-button>
            <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus data-op-id="0" onChange={this.handleChange} />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChange}  />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" name="remember" defaultChecked={this.state.remember} onChange={this.handleChangeChk} /> Remember me
    </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted text-center">© 2017-2019</p>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
