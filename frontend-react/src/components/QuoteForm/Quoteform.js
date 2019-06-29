import React, { Component } from 'react';
import axios from 'axios';

class QuoteForm extends Component {

  constructor(props){
      super(props);

    this.state = { 
     userId:'',
     shopId:'',
     requestId: '',
     quote: '',
     timetofix: '',
     status: 'sentback'
      }
  }

  


handleFormSubmit = (event) => {
    event.preventDefault();
    const timetofix = this.state.timetofix;
    const quote = this.state.quote;
    const userId = this.props.location.state.userid;
    const shopId = this.props.location.state.shopid;
    const requestId = this.props.location.state.requestId;

    const status = "sentback"
    axios.post("http://localhost:5001/auth/shop/quote", { shopId, userId, requestId, timetofix, status, quote })
    .then( (data) => {
        //this.props.getData();
        console.log(data);
        this.setState({shopId: "", userId: "", requestId: "", timetofix:"", quote: ""});
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
            <label>Quote:</label>
            <input type="text" name="quote" value={this.state.quote} onChange={(e) => this.handleChange(e)} />

  
            <label>TimeToFix:</label>
            <input type="text" name="timetofix" value={this.state.timetofix} onChange={(e) => this.handleChange(e)} />

            
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default QuoteForm;