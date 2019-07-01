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

    this.service.login(username, password).then(response => {
      console.log(response);
      this.setState({
        redirect: true
      });
      // this.props.setUser(response)
    });
  };
  render() {
    return (
      <div>
        <div className="container" style={{ width: "60%" }}>
          <div className=" row justify-content-center">
            <div className="col-md-8" style={{ borderRadius: "0" }}>
              {this.state.redirect ? <Redirect to="/auth/currentuser/user" /> : ""}
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
                    <div class="cols-sm-10">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa fa-envelope fa" aria-hidden="true" />
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

                    <div class="cols-sm-10">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa fa-envelope fa" aria-hidden="true" />
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

                    <div class="cols-sm-10">
                      <div class="input-group">
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
                    <Link className="text-info" to="/auth/signup">
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
