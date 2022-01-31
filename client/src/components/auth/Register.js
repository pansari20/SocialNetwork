import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    axios.post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {

    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit} id="signingPage">
        <br /> <br />

        {/* Radio button */}
        <div id="loginRegisterToggle" className="btn-group my-3 mx-4" role="group"
          aria-label="Basic radio toggle button group">

          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
          <Link to='/login' className="btn btn-outline-primary" htmlFor="btnradio1">LogIn</Link>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" defaultChecked />
          <Link to='/register' className="btn btn-outline-primary" htmlFor="btnradio2">SignUp</Link>
        </div>

        <div className="col-sm-10">
          <input
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            className={classnames('form-control my-3 inputform', {
              'is-invalid': errors.name
            })}
            placeholder="Name"
            autoComplete="off"
          />
          {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}

          <input
            autoComplete="off"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            className={classnames('form-control my-3 inputform', {
              'is-invalid': errors.email
            })}
            placeholder="Email Address"
          />
          {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

          <input
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            className={classnames('form-control my-3 inputform', {
              'is-invalid': errors.password
            })}
            placeholder="Password"
          />
          {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          <input
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
            type="password"
            className={classnames('form-control my-3 inputform', {
              'is-invalid': errors.password2
            })}
            placeholder="Confirm Password"
          />
          {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
        </div>

        <p style={{ fontSize: '0.8rem', margin: '0.5rem 7.4rem' }}>Already a user ?<Link id="loginHere" to="/login" style={{ 'textDecoration': 'none' }} > Login!</Link></p>
        <div className="d-grid">
          <button style={{ boxShadow: 'none' }} className="btn btn-secondary my-3" type="submit">Register!</button>
        </div>
        <br /><br />
      </form>
    )
  }
}

export default Register;