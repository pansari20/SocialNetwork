import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} id="signingPage">
        <br /> <br />

        {/* Radio button */}
        <div id="loginRegisterToggle" className="btn-group my-3 mx-4" role="group"
          aria-label="Basic radio toggle button group">

          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
          <Link to='/login' className="btn btn-outline-primary" htmlFor="btnradio1">LogIn</Link>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
          <Link to='/register' className="btn btn-outline-primary" htmlFor="btnradio2">SignUp</Link>
        </div>

        <div className="col-sm-10">
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            className="form-control my-3 inputform"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            className="form-control my-3 inputform"
            placeholder="Password"
          />
        </div>

        <p style={{ fontSize: '0.8rem', margin: '0.5rem 5rem' }}>Don't have an account ?<Link id="registerHere" to="/register" > Register Here!</Link></p>
        <div className="d-grid">
          <button style={{ boxShadow: 'none' }} className="btn btn-secondary my-3" type="submit">Login Now!</button>
        </div>
        <br /><br />
      </form>
    )
  }
}

export default Login
