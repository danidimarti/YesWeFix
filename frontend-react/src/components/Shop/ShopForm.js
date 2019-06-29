/* eslint-disable default-case */
import React, { Component } from "react";
import FormShopDetails from "./FormShopDetails";
import FormEmployeeDetails from "./FormEmployeeDetails";
import FormRepairTypeDetails from "./FormRepairTypeDetails";
import Confirm from "./Confirm";
//import Success from "./Success";

class ShopForm extends Component {
  state = {
    step: 1,

    shopname: "",
      streetname: "",
      mobile: "",
      vehiclesservices: [],
      consumerservices: [],
      homeservices: [],
      description: "",
      imageUrl: "",
      email: "",
      username: "",
      password: "",
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
  changeHandler = e => {
    console.log(e)
    //console.log(this.state)
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });

  };

  setLatLng = (lat, lng, address) => {
  
    this.setState({
      lat: lat,
      lng: lng,
      streetname: address
    })
  } 

  render() {
    const { step } = this.state;
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
      
    } = this.state;
    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <FormShopDetails
            nextStep={this.nextStep}
            changeHandler={this.changeHandler}
            values={values}
            setLatLng={this.setLatLng}
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
            setUser={this.props.setUser}
          />
        );

      // case 5:
      //   return <Success />;
    }
  }
}

export default ShopForm;
