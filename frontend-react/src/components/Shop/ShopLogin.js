import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fireRedirect: false
    };
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
    debugger;
    const username = this.state.username;
    const password = this.state.password;
    debugger;

    this.authService

      .login(username, password)

      .then(response => {
       
        this.props.setUser(response);
        
        this.setState({
          fireRedirect: true
        });
        
      });
  };
  render() {
    // const { from } = this.props.location.state
    const { fireRedirect } = this.state;
    if (fireRedirect) {
      return <Redirect to={"/auth/currentuser"} />;
    }
    return (
      <div>
        <div className="container" style={{ width: "60%" }}>
          <div className=" row justify-content-center">
            <div className="col-md-8" style={{ borderRadius: "0" }}>
              <div
                className="card"
                style={{
                  borderRadius: "0",
                  borderColor: "black",
                  borderWidth: 0.5
                }}
              >
                <div
                  className="card-header green-color white-text text-center"
                  style={{ borderRadius: "0", marginBottom: "0px" }}
                >
                  Login
                </div>
                <form
                  className="form-horizontal"
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <div className="form-group">
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-envelope fa" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          name="username"
                          value={this.state.username}
                          onChange={e => this.changeHandler(e)}
                          className="input"
                          placeholder="Username"
                        />
                      </div>
                    </div>

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
                        <input
                          id="submit-user"
                          className="btn-form btn-info"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-black text-size">
                    Don't have an account yet?{" "}
                    <Link className="text-info" to="/auth/signup/shop">
                      Signup
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
