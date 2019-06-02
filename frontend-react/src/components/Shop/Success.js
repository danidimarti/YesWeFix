import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";


//rce + tab (create class component)
export class Success extends Component {
  
  render() {
    
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your registration!</h1>
          <p>You will get an email with further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Success;
