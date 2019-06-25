import React, { Component } from "react";
import {Link} from "react-router-dom"

//rce + tab (create class component)
export class Success extends Component {
  render() {
    return (
      <div className="container" style={{ width: "70%" }}>
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
                Welcome to YesWeFix!
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i class="fa fa-user fa" aria-hidden="true" />
                  </span>
                  <h1 className="input-label-ty">
                    Thank you for your registration!
                  </h1>
                  <p className="input-label-pg">
                    You will get an email with further instructions.
                  </p>
                </div>
              </div>

              <p className="text-center text-black text-size">
                <Link className="text-info" to="/auth/login">
                Click here to login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
