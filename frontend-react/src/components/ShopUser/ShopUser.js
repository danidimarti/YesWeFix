/* eslint-disable array-callback-return */
import React, { Component } from "react";
import axios from "axios";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      requests: [],
      request: null,
      user: this.props.user
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      request: this.props.request
    });
  }

  componentDidMount() {
    
    axios
      .get(`http://localhost:5001/auth/request/${this.state.user._id}`)
      .then(requests => {
        console.log(requests)
        //debugger;
        this.setState({ requests: requests.data });
      });
  }

  getRequestCard(request, index) {
    return (
      <div key={index}>
        <button
          className="btn btn-block btn-toggle"
          onClick={this.toggle.bind(this)}
        >
          Request to {request.shopId.shopname} about {request.shopId.repairtype}
        </button>
        <div className={"collapse" + (this.state.open ? " in" : "")}>
          <div className="grey">
            <h4>{request.subject}</h4>
            <p>Resquest sent on: {request.createdAt} </p>
            <p>
              {" "}
              {request.description}
            </p>
            <p>{request.status}</p>
            <button>Send Quote: send user to quote form</button>
            <button>Reject/Delete</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    //!todo: ADD A MAP FUNCTION TO DISPLAY ALL REQUESTS
    return (
      <div>
        {this.props.user ? (
          <div className="component" style={{ paddingTop: "-20%" }}>
            <h1 id="salutation">
              Hey {this.props.user.username}, lots of new request voor jouw!
            </h1>
            <p className="title-req"> Click on the request to see details:</p>
            <div className="cart">
              { this.state.requests.map((request, index) => {
                 return this.getRequestCard(request, index)
              })}
            </div>
          </div>
        ) : (
          <h3>USER DENIED. PLEASE LOGIN AND TRY AGAIN</h3>
        )}{" "}
      </div>
    );
  }
}
