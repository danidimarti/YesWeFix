import React, { Component } from "react";
import AuthService from '../../auth/AuthService';

class Usersignup extends Component {
  state = {
    username: "",
    password: "",
    mobile: "",
    email: ""
  };

  authService = new AuthService();

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();

      const username = this.state.username;
      const password = this.state.password;
      const email = this.state.email;
      const mobile = this.state.mobile;

      this.authService.signup(username, password, email, mobile)
        .then(response => {
            console.log(response);
        })
      
  }

  render() {
    return (
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
    );
  }
}

export default Usersignup;