import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FormControl from "@material-ui/core/FormControl";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

//rce + tab (create class component)
export class FormRepairTypeDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleChangeMultiple = e => {
    const { options } = e.target;
    const input = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        input.push(options[i].input);
      }
    }
    this.props.changeHandler(input);
  };

  render() {
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
      "appliances repair (e.g. )",
      "electrician",
      "heating technician",
      "roofer",
      "exterminator",
      "blacksmith"
    ];

    const consumerservices = [
      "Shoe maker",
      "Bags maker",
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
    const { values, changeHandler } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Your Personal Details" />
          <FormControl >
            <InputLabel htmlFor="select-multiple-checkbox">
              Home Repairs
            </InputLabel>
            <Select
              multiple
              value={values.repairtype}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(", ")}
                        >
              {homeservices.map(service => (
                <MenuItem key={service} value={service}>
                  <Checkbox checked={service.indexOf(service) > -1} />
                  <ListItemText primary={service} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
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
    },
    
  };

export default FormRepairTypeDetails;
