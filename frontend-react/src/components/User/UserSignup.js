import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./User.css";
import { Link } from "react-router-dom";

class Usersignup extends Component {
  //rconst shortcut
  constructor(props) {
    super(props)
  
    this.state = {
      username: "",
      password: "",
      mobile: "",
      email: "",
      redirect: false
    }
  }

 
  authService = new AuthService();

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const mobile = this.state.mobile;

    this.authService
      .userSignup(username, password, email, mobile)
      .then(response => {
        console.log(response);
        const settingUser = this.props.setUser(response)
        this.setState({
          redirect: true,
          userState: settingUser
        });
      });
  };



  render() {
    
    return (
      <div className="container" style={{ width: "60%" }}>
        <div className=" row justify-content-center">
          <div className="col-md-8" style={{ borderRadius: "0" }}>
            {this.state.redirect ? <Redirect to="/auth/login" /> : ""}
            <div className="card" style={{ borderRadius: "0", borderColor: "black", borderWidth: 0.5 }}>
              <div
                className="card-header green-color white-text text-center"
                style={{ borderRadius: "0", marginBottom: "0px" }}
              >
                Sign up
              </div>
              <form
                className="form-horizontal"
                onSubmit={e => this.handleSubmit(e)}
              >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.changeHandler(e)}
                      className="input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-envelope fa" aria-hidden="true" />
                      </span>
                      <input
                        type="text"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={e => this.changeHandler(e)}
                        className="input"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.changeHandler(e)}
                    className="input"
                    placeholder="Username"
                  />
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-envelope fa" aria-hidden="true" />
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.changeHandler(e)}
                        className="input"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <input id="submit-user" className="btn-form btn-info" type="submit" value="Submit" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-black text-size">
                  Already have an account?{" "}
                  <Link className="text-info" to="/auth/login-user">
                    Login in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Usersignup;


