import React, { Component } from 'react';
import axios from 'axios';

class RequestForm extends Component {

  constructor(props){
      super(props);

    this.state = { 
     username: '', 
     userid:'',
     shop:'',
     subject: '',
     description: '',
     imageUrl: '',
     status: 'sent'
      }
  }

  


handleFormSubmit = (event) => {
    event.preventDefault();
    const shop = this.state.shop;
    const subject = this.state.subject;
    const description = this.state.description;
    const imageUrl = this.state.imageUrl;
    axios.post("username/request", { shop, subject, description, imageUrl })
    .then( () => {
        this.props.getData();
        this.setState({shop: "",subject: "", description: "", imageUrl:""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  
  render(){
    return (

      <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Subject:</label>
            <input type="text" name="subject" value={this.state.subject} onChange={(e) => this.handleChange(e)} />
  
            <label>Description:</label>
            <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />

  
            <label>imageUrl:</label>
            <input type="text" name="imageUrl" checked={this.state.imageUrl} onChange={(e) => this.handleChange(e)} />

            
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default RequestForm;
