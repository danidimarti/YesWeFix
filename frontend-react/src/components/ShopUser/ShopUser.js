import React, { Component } from "react";

export default class ShopUser extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    //!todo: ADD A MAP FUNCTION TO DISPLAY ALL REQUESTS
    return (
      <div>
      
        {this.props.user ? (
          <div className="component" style={{paddingTop:"-20%"}}>
          <h1 id="salutation">Good to see you back, {this.props.user.username}!</h1>
          <p className="title-req"> Click on the request to see details.</p>
            <div className="cart">
            {/* {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))} */}
              <button
              
                className="btn btn-block btn-toggle"
                onClick={this.toggle.bind(this)}
              >
                Request from {this.props.firstname} on: ADD DATE
              </button>
              <div
                // id="demo"
                className={"collapse" + (this.state.open ? " in" : "")}
              >
                <div className="grey">
                  <h4>This is the subject line</h4>
                  <p> This is the description Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.</p>
                  <p>this.props.status</p>
                  <button>SENDS SHOP TO QUOTE FORM</button>
                  <button>Reject /Delete first reject then delete</button>

                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>USER DENIED. PLEASE LOGIN AND TRY AGAIN</h3>
        )}{" "}
      </div>
    );
  }
}
