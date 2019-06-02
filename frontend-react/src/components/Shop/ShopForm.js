/* eslint-disable default-case */
import React, { Component } from "react";
import FormShopDetails from "./FormShopDetails";
import FormEmployeeDetails from "./FormEmployeeDetails";
import FormRepairTypeDetails from "./FormRepairTypeDetails";
import Confirm from "./Confirm";
import Success from './Success'

class ShopForm extends Component {
  state = {
    step: 1,

    businessname: "",
    role: "",
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",

    streetname: "",
    postcode: "",
    city: "",
    state: "",
    country: "",

    phonenumber: "",
    kvk: "",

    repaitype: ""
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change 11:07
  changeHandler = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const {
      businessname,
      role,
      firstname,
      lastname,
      email,
      username,
      password,
      streetname,
      postcode,
      city,
      state,
      country,
      phonenumber,
      kvk,
      repaitype
    } = this.state;
    const values = {
      businessname,
      firstname,
      lastname,
      email,
      username,
      password,
      streetname,
      postcode,
      phonenumber,
      kvk,
      repaitype
    };

    switch (step) {
      case 1:
        return (
          <FormShopDetails
            nextStep={this.nextStep}
            changeHandler={this.changeHandler}
            values={values}
          />
        );
      case 2:
        return (
          <FormRepairTypeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            changeHandler={this.changeHandler}
            values={values}
          />
        );

      case 3:
        return (
          <FormEmployeeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            changeHandler={this.changeHandler}
            values={values}
          />
        );

      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 5:
        return <Success />
    }
  }
}

export default ShopForm;
