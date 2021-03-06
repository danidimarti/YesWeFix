import React, { Component } from "react";
import axios from "axios";
//import ShopProfile from "../ShopProfile/ShopProfile"
import "./Request.css";
import Calendar from "./Calendar";

class RequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      user: null,
      shop: null,
      subject: "",
      description: "",
      imageUrl: "",
      status: "sent"
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const userId = "5d1b73edf4a4ac365889b6a5";
    const subject = this.state.subject;
    const description = this.state.description;
    const imageUrl = this.state.imageUrl;
    const shopId = this.props.location.state.shopId;
    axios
      .post("http://localhost:5001/auth/request", {
        userId,
        shopId,
        subject,
        description,
        imageUrl
      })
      .then(response => {
        // this.props.getData();
        console.log(response);
        
         this.setState({requestForm: response, redirect: true});
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="page">
        <div>Send an message to {this.props.location.state.shopName}</div>
        <div className="input-form-req">
          <form onSubmit={this.handleFormSubmit}>
            <label className="input-label-title-req">Subject:*</label>

            <div className="form-group-req">
              <div className="input-group-req">
                <span className="input-group-addon">
                  <i className="fa fa-user fa" aria-hidden="true" />
                </span>

                <input
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  onChange={e => this.handleChange(e)}
                  className="input-req"
                  // placeholder="Business Name"
                />
              </div>
            </div>

            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-envelope fa" aria-hidden="true" />
                </span>

                <div className="input-group">
                  <label className="input-label-title-req">Description:*</label>
                  <textarea
                    className="input-box txt-area-req"
                    // id="exampleFormControlTextarea1"
                    rows="5"
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>

            <div className="cols-sm-10">
              <div className="input-group-req">
                <span className="input-group-addon">
                  <i className="fa fa-envelope fa" aria-hidden="true" />
                </span>

                <div className="input-group-req img-field-req">
                  <input
                    type="text"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    onChange={e => this.handleChange(e)}
                    className="input-req"
                    placeholder="Upload an image (optional)"
                  />
                </div>
              </div>
              <div className="input-group-btn-sm">
                <input
                  id="upload-btn-req"
                  className="btn-form btn-info"
                  type="submit"
                  value="Upload..."
                  // onClick={this.upload}
                />
              </div>
            </div>
            <input
              id="send-btn"
              className="btn-info-req"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <Calendar />
      </div>
    );
  }
}

export default RequestForm;
