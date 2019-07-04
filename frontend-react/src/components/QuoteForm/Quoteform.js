import React, { Component } from "react";
import axios from "axios";

class QuoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      shopId: "",
      requestId: "",
      quote: "",
      timetofix: "",
      status: "sentback"
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const timetofix = this.state.timetofix;
    const quote = this.state.quote;
    const userId = this.props.location.state.userid;
    const shopId = this.props.location.state.shopid;
    const requestId = this.props.location.state.requestId;

    const status = "sentback";
    axios
      .post("http://localhost:5001/auth/shop/quote", {
        shopId,
        userId,
        requestId,
        timetofix,
        status,
        quote
      })
      .then(data => {
        //this.props.getData();
        console.log(data);
        this.setState({
          shopId: "",
          userId: "",
          requestId: "",
          timetofix: "",
          quote: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="container" style={{ width: "60%" }}>
          <div className=" row justify-content-center">
            <div className="col-md-8" style={{ borderRadius: "0" }}>
              <div
                className="card"
                style={{
                  borderRadius: "0",
                  borderColor: "black",
                  borderWidth: 0.5
                }}
              >
                <div
                  className="card-header green-color white-text text-center"
                  style={{ borderRadius: "0", marginBottom: "0px" }}
                >
                  Quote
                </div>
                <form
                  className="form-horizontal"
                  onSubmit={this.handleFormSubmit}
                >
                  <div className="form-group">
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-envelope fa" aria-hidden="true" />
                        </span>
                        <label>Quote:</label>
                        <input
                          type="text"
                          name="quote"
                          value={this.state.quote}
                          onChange={e => this.handleChange(e)}
                          className="input"
                          placeholder="Enter quote here"
                        />
                      </div>
                    </div>

                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-envelope fa" aria-hidden="true" />
                        </span>
                        <label>TimeToFix:</label>
                        <input
                          type="text"
                          name="timetofix"
                          className="input"
                          value={this.state.timetofix}
                          onChange={e => this.handleChange(e)}
                        />
                      </div>
                    </div>

                    <div className="cols-sm-10">
                      <div className="input-group">
                        <input
                          id="submit-user"
                          className="btn-form btn-info"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <pre>{JSON.stringify(this.state, "\t", 2)}</pre> */}
        </div>
      </div>
    );
  }
}

export default QuoteForm;
