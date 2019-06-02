import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import NativeSelect from "@material-ui/core/NativeSelect";

//rce + tab (create class component)
export class FormBusinessDetails extends Component {
  continue = e => {
    e.preventDefault();
    //TODO: process form in here. create method that connects to backend
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        businessname,
        firstname,
        lastname,
        email,
        streetname,
        postcode,
        phonenumber,
        kvk,
        repaitype
      }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Your Details" />
          <List>
            <ListItem
              primaryText="Business Name"
              secondaryText={businessname}
            />
            <ListItem
              primaryText="Business Address"
              secondaryText={streetname}
            />
            <ListItem primaryText="Postcode" secondaryText={postcode} />
            <ListItem primaryText="Phone Number" secondaryText={phonenumber} />
            <ListItem primaryText="KvK" secondaryText={kvk} />
            <ListItem primaryText="Services" secondaryText={repaitype} />
            <ListItem primaryText="First Name" secondaryText={firstname} />
            <ListItem primaryText="Last Name" secondaryText={lastname} />
            <ListItem primaryText="Email" secondaryText={email} />
          </List>
          <br />
          <RaisedButton
            label="Submit"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormBusinessDetails;
