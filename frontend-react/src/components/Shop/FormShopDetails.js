import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import FormControl from '@material-ui/core/FormControl';
import RaisedButton from "material-ui/RaisedButton";
import NativeSelect from "@material-ui/core/NativeSelect";

//rce + tab (create class component)
export class FormShopDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, changeHandler } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Business Details" />
          <TextField
            hinttext="Enter Your Business Name"
            floatingLabelText="Business Name"
            onChange={e => changeHandler(e)}
            defaultValue={values.businessname}
          />
          <br />
          <TextField
            hinttext="Enter Your Business Address"
            floatingLabelText="Business Address"
            onChange={e => changeHandler(e)}
            defaultValue={values.streename}
          />
          <br />
          <TextField
            hinttext="Enter Your Postcode"
            floatingLabelText="Postcode"
            onChange={e => changeHandler(e)}
            defaultValue={values.postcode}
          />
          <br />
          <TextField
            hinttext="Enter Your Phone number"
            floatingLabelText="Phone Number"
            onChange={e => changeHandler(e)}
            defaultValue={values.phonenumber}
          />
          <br />
          <TextField
            hinttext="Enter Your kvk number"
            floatingLabelText="KvK"
            onChange={e => changeHandler(e)}
            defaultValue={values.kvk}
          />
          <br />

          <br />
          <RaisedButton
            label="Continue"
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

export default FormShopDetails;
