/* eslint-disable array-callback-return */
import React, { Component } from "react";
import axios from "axios";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      requests: [],
      user: this.props.user
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      requests: this.props.request
    });
  }

  componentDidMount() {
    debugger;
    axios
      .get(`http://localhost:5001/auth/request/${this.state.user._id}`)
      .then(requests => {
        this.setState({ requests: requests });
      });
  }

  getRequestCard(requests, index) {
    return (
      <div key={index}>
        <button
          className="btn btn-block btn-toggle"
          onClick={this.toggle.bind(this)}
        >
          Request to {this.props.shopName} about this.props.repairtype
        </button>
        <div className={"collapse" + (this.state.open ? " in" : "")}>
          <div className="grey">
            <h4>This is the subject line</h4>
            <p>Resquest sent on: 07/040 2019 @ 14h00 </p>
            <p>
              {" "}
              This is the description Anim pariatur cliche reprehenderit, enim
              eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
              sapiente ea proident.
            </p>
            <p>this.props.status</p>
            <button>Accept user is send to payment page</button>
            <button>Reject /Delete first reject then delete</button>
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
              Good to see you back, {this.props.user.username}!
            </h1>
            <p className="title-req"> Click on the request to see details:</p>
            <div className="cart">
              {this.state.requests.map((request, index) => {
                this.getRequestCard(request, index);
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
