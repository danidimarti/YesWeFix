import React, { Component } from "react";
import AuthService from '../../auth/AuthService';
import { Redirect } from 'react-router-dom'

class Usersignup extends Component {
  state = {
    firstname: "",
    password: "",
    mobile: "",
    email: "",
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/auth/user/login' />
    }
  }

  authService = new AuthService();

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();

      const firstname = this.state.firstname;
      const password = this.state.password;
      const email = this.state.email;
      const mobile = this.state.mobile;

      this.authService.signup(firstname, password, email, mobile)
        .then(response => {
            console.log(response);
            this.setState({
              redirect: true
            })
        })
      
  }

  render() {
    return (
      <div>
      {this.state.redirect ? <Redirect to='/login' /> : ""}
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <h1>SIGNUP</h1>
            <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.changeHandler(e)}
          />
          <input
            type="text"
            name="mobile"
            value={this.state.mobile}
            onChange={e => this.changeHandler(e)}
          />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.changeHandler(e)}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.changeHandler(e)}
          />
          <input type="submit" value="signup" />
        </form>
      </div>
    );
  }
}

export default Usersignup;