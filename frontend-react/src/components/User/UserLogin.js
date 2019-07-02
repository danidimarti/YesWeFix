import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./User.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        origin: this.props.location.state.origin
      });
    }
  }
  service = new AuthService();

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

    this.service.userLogin(username, password).then(response => {
      console.log(response);
      this.setState({
        redirect: true
      });
      this.props.setUser(response);
    });
  };
  render() {
    return (
      <div>
        <div className="container" style={{ width: "60%" }}>
          <div className=" row justify-content-center">
            <div className="col-md-8" style={{ borderRadius: "0" }}>
              {/* {() => {
                if (
                  this.state.redirect &&
                  this.state.origin === "requestForm"
                ) {
                  return <Redirect to="/auth/request" />;
                } else if (this.state.redirect) {
                  return <Redirect to="/auth/currentuser/user" />;
                } else {
                  return "";
                }
              }} */}

              {this.state.redirect && this.state.origin != null ? (
                <Redirect to={this.state.origin} />
              ) : (
                ""
              )}
              {/* {this.state.redirect ? (
                <Redirect to="/auth/currentuser/user" />
              ) : (
                ""
              )} */}

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
                    <Link className="text-info" to="/auth/signup/user">
                      Signup
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <pre>{JSON.stringify(this.state, "\t", 2)}</pre>
        </div>
      </div>
    );
  }
}
