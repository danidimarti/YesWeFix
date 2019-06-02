import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FormControl from '@material-ui/core/FormControl';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import NativeSelect from "@material-ui/core/NativeSelect";

//rce + tab (create class component)
export class FormEmployeeDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

    render() {
    const { values, changeHandler } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Your Personal Details" />
          <TextField
            hinttext="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={changeHandler("firstname")}
            defaultValue={values.firstname}
          />
          <br />
          <TextField
            hinttext="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={changeHandler("lastnanme")}
            defaultValue={values.lastnanme}
          />
          <br />
          <TextField
            hinttext="Enter Your Email"
            floatingLabelText="Email"
            onChange={changeHandler("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            id="standard-password-input"
            hinttext="Choose a password"
            floatingLabelText="Password"
            onChange={changeHandler("password")}
            defaultValue={values.password}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
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

export default FormEmployeeDetails;
