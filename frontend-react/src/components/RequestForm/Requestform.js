import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


//rce + tab (create class component)
export class RequestForm extends Component {
 state = {
     repairid: '', //how to only retieve repair shop info and display here.
     subject: '',
     description: '',
     imageUrl: '',
     status: '',
 } 

     changeHandler = e => {
        console.log(e)
        //console.log(this.state)
        const { value, name } = e.target;
    
        this.setState({
          [name]: value
        });

        handleSubmit = e => {
          //TODO: create handle submit method
        }

        handleFileUpload = e => {
          //TODO: create handle submit method
        }

  render() {
    
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <label for="subject">Subject </label>
        <input type="text" name="subject" id="subject" />

        <label for="Description">Description</label>
        <input type="text" placeholder='Please describe your case in a few words' name="Description" id="Description" />

        <form onSubmit={e => this.handleSubmit(e)}>
                <label>Subject</label>
                <input 
                    type="text" 
                    name="subject" 
                    value={ this.state.subject } 
                    onChange={ e => this.changeHandler(e)} />
                <label>Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    value={ this.state.description } 
                    onChange={ e => this.changeHandler(e)} />
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Send Request</button>
            </form>  

          <br />
          <RaisedButton
            label="Send Request"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  
}

const styles = {
  button: {
    margin: 15
  }
};

export default RequestForm;
