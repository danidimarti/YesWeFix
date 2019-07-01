import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";

import "bootstrap/dist/css/bootstrap.css";
import "./Shop.css";

//rce + tab (create class component)
class FormRepairTypeDetails extends Component {
  //rconst shortcut
  constructor(props) {
    super(props);

    this.state = {
      homeservices: [],
      consumerservices: [],
      vehiclesservices: [],
      description: "",
      imageUrl: ""
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

    const homeservices = [
      "movers",
      "home cleaning",
      "carpenter",
      "handyman",
      "painter",
      "gardener",
      "lock smith",
      "plumber",
      "smart home installation",
      "appliances repair (e.g. wash machine)",
      "electrician",
      "heating technician",
      "roofer",
      "exterminator",
      "blacksmith"
    ];

    const consumerservices = [
      "shoe maker",
      "bags maker",
      "phone repairs",
      "computer repair",
      "tailor"
    ];

    const vehiclesservices = [
      "car glass",
      "car painter (scratch)",
      "scooter repair",
      "bike repair",
      "bike painter",
      "car services (e.g. oil change, filter change)",
      "auto repair/ mechanic",
      "car wash",
      "interior car care",
      "car scanning",
      "car electrician",
      "car customization"
    ];

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
                Enter Shop Information
              </div>
              <form
                className="form-horizontal"
                onSubmit={e => this.handleSubmit(e)}
              >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i class="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <label className="input-label-title">
                      Please select the type of services you provide
                    </label>
                    <InputLabel
                      htmlFor="select-multiple-checkbox"
                      className="input-label"
                      style={{ fontWeight: "380", fontSize: "12px" }}
                    >
                      Home Repairs
                    </InputLabel>
                    <Select
                      multiple
                      value={values.homeservices}
                      onChange={e => this.props.changeHandler(e)}
                      input={<Input id="select-multiple-checkbox" />}
                      renderValue={selected => selected.join(', ')}
                      name={"homeservices"}
                      className="input-box"
                    >
                      {homeservices.map(service => (
                        <MenuItem
                          key={service}
                          value={service}
                          className="select"
                        >
                          <ListItemText primary={service} className="select" />
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i class="fa fa-user fa" aria-hidden="true" />
                    </span>

                    <InputLabel
                      htmlFor="select-multiple-checkbox"
                      className="input-label"
                      style={{ fontWeight: "380", fontSize: "12px" }}
                    >
                      Consumer Services
                    </InputLabel>
                    <Select
                      multiple
                      value={values.consumerservices}
                      onChange={e => this.props.changeHandler(e)}
                      input={<Input id="select-multiple-checkbox" />}
                      renderValue={selected => selected.join(', ')}
                      name={"consumerservices"}
                      className="input-box"
                    >
                      {consumerservices.map(service => (
                        <MenuItem
                          key={service}
                          value={service}
                          className="select"
                        >
                          <ListItemText primary={service} className="select" />
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i class="fa fa-user fa" aria-hidden="true" />
                    </span>

                    <InputLabel
                      htmlFor="select-multiple-checkbox"
                      className="input-label"
                      style={{ fontWeight: "380", fontSize: "12px" }}
                    >
                      Vehicle Services
                    </InputLabel>
                    <Select
                      multiple
                      value={values.vehiclesservices}
                      onChange={e => this.props.changeHandler(e)}
                      input={<Input id="select-multiple-checkbox" />}
                      renderValue={selected => selected.join(", ")}
                      name={"vehiclesservices"}
                      className="input-box"
                    >
                      {vehiclesservices.map(service => (
                        <MenuItem
                          key={service}
                          value={service}
                          className="select"
                        >
                          <ListItemText primary={service} className="select" />
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope fa" aria-hidden="true" />
                    </span>

                    <div className="input-group">
                      <label className="input-label-title">Description</label>
                      <textarea
                        class="input-box txt-area"
                        id="exampleFormControlTextarea1"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  name="imageUrl"
                  value={values.imageUrl}
                  onChange={e => this.props.changeHandler(e)}
                  className="input"
                  placeholder="Upload an image"
                />
                <div class="input-group-btn-sm">
                  <input
                    id="upload-btn"
                    className="btn-form btn-info"
                    type="submit"
                    value="Upload..."
                    // onClick={this.upload}
                  />
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
                      value="Continue"
                      onClick={this.continue}
                    />
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

export default FormRepairTypeDetails;
