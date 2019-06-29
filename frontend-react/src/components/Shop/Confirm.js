import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";
//import { Link } from "react-router-dom";
import Success from "./Success";

//rce + tab (create class component)
export class FormBusinessDetails extends Component {
  state = {
    redirect: false,

  }
  
  authService = new AuthService();

  handleSubmit = e => {
    e.preventDefault();

    const {
      shopname,
      streetname,
      mobile,
      vehiclesservices,
      consumerservices,
      homeservices,
      description,
      imageUrl,
      email,
      username,
      password,
      lat,
      lng
    } = this.props.values;
    
    this.authService
      .signup(
        shopname,
        streetname,
        mobile,
        vehiclesservices,
        consumerservices,
        homeservices,
        description,
        imageUrl,
        email,
        username,
        password,
        lat,
        lng
      )
      .then(response => {
        console.log(response);
        console.log("succesfull");
         this.props.setUser(response);
        this.setState({
          redirect: true,
          // userState: settingUser
        });
      });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      shopname,
      streetname,
      mobile,
      vehiclesservices,
      consumerservices,
      homeservices,
      description,
      imageUrl,
      email,
      username,
      password
    } = this.props.values;
    const concatRepairtype = homeservices
      .concat(vehiclesservices)
      .concat(consumerservices);
    const repairtype = concatRepairtype.join(", ");
    return (
      <div className="container" style={{ width: "70%" }}>
      {this.state.redirect ? <Success /> : 
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
                Confirm your details
              </div>
              <form
                className="form-horizontal"
                onSubmit={e => this.handleSubmit(e)}
              >
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope fa" aria-hidden="true" />
                    </span>

                    <div className="input-group">
                      <label className="input-label-title">Business Name</label>
                      <p>{shopname}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Address</label>
                      <p>{streetname}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Phone Number</label>
                      <p>{mobile}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Business Type</label>
                      <p>{repairtype}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Description</label>
                      <p>{description}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Image Preview</label>
                      <p>{imageUrl}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Email</label>
                      <p>{email}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Username</label>
                      <p>{username}</p>
                    </div>
                    <div className="input-group">
                      <label className="input-label-title">Password</label>
                      <p>{password}</p>
                    </div>
                  </div>
                </div>

                <div class="cols-sm-10">
                  <div class="input-group-btn">
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
                      value="Register"
                      onClick={this.handleSubmit}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default FormBusinessDetails;
