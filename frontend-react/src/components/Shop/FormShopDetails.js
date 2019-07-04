import React, { Component } from "react";
import SearchBar from "../Map/SearchBar";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";
import { Link } from "react-router-dom";

//rce + tab (create class component)
export class FormShopDetails extends Component {
  //rconst shortcut
  constructor(props) {
    super(props);

    this.state = {
      shopname: "",
      streetname: "",
      mobile: "",
      lat: null,
      lng: null,
      redirect: false
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  authService = new AuthService();

  changeHandler = e => {
    e.preventDefault()
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

 handleSubmit = e => {
   e.preventDefault()
 } 

  

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
                Enter Business Details
              </div>
              <form
                className="form-horizontal"
                onSubmit={e => this.handleSubmit}
              >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      name="shopname"
                      value={values.shopname}
                      onChange={e => this.props.changeHandler(e)}
                      className="input"
                      placeholder="Business Name"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-user fa" aria-hidden="true" />
                      </span>
                      <SearchBar 
                      setLatLng={this.props.setLatLng}
                      hideButton={true}
                      value={values.streetname}
                      onChange={e => this.props.changeHandler(e)}
                      styleForm={true}
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
                          value={values.mobile}
                          onChange={e => this.props.changeHandler(e)}
                          className="input"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <input
                          id="submit-user"
                          className="btn-form btn-info"
                          type="submit"
                          value="Continue"
                          onClick={this.continue}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-black text-size">
                    Already have an account?{" "}
                    {/* <Link className="text-info" to="/auth/login-user"> */}

                    <Link className="text-info" to="/auth/login-shop">
                      Login in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormShopDetails;
