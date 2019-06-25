import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SearchBar from "../Map/SearchBar";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";
import { Link } from "react-router-dom";

//rce + tab (create class component)
class FormShopDetails extends Component {
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
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

 

  setLatLng = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    })
  } 

  render() {
    const { values, changeHandler } = this.props;
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
                
              >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i class="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      name="shopname"
                      value={this.state.shopname}
                      onChange={e => this.changeHandler(e)}
                      className="input"
                      placeholder="Business Name"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i class="fa fa-user fa" aria-hidden="true" />
                      </span>
                      <SearchBar 
                      setLatLng={this.setLatLng}
                      hideButton={true} />
                    </div>

                    <div class="cols-sm-10">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa fa-envelope fa" aria-hidden="true" />
                        </span>
                        <input
                          type="text"
                          name="mobile"
                          value={this.state.mobile}
                          onChange={e => this.changeHandler(e)}
                          className="input"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    
                    <div class="cols-sm-10">
                      <div class="input-group">
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
                    <Link className="text-info" to="/auth/login/shop">
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
