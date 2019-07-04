import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";


//rce + tab (create class component)
class FormEmployeeDetails extends Component {
  //rconst shortcut
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      redirect: false
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

 
  render() {
    const { values } = this.props;
    return (
      <div className="container" style={{ width: "70%" }}>
        <div className=" row justify-content-center">
          <div className="col-md-8" style={{ borderRadius: "0" }}>
            {this.state.redirect ? <Redirect to="/auth/login" /> : ""}
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
                Enter Personal Details
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
                      value={values.email}
                      onChange={e => this.props.changeHandler(e)}
                      className="input"
                      placeholder="Email"
                    />
                  </div>

                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={e => this.props.changeHandler(e)}
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
                        value={values.password}
                        onChange={e => this.props.changeHandler(e)}
                        className="input"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="cols-sm-10">
                    <div className="input-group-btn">
                      <input
                        id="back-btn"
                        className="btn-form btn-info"
                        type="submit"
                        value="Back"
                        onClick={this.back}
                      />
                      <input
                        id="continue-btn"
                        className="btn-form btn-info"
                        type="submit"
                        value="Continue"
                        onClick={this.continue}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormEmployeeDetails;
