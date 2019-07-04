import React, { Component } from "react";
import "./Request.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export class Calendar extends Component {
  constructor() {
    super();
    var today = new Date();
    let dd = today.getDate();
    let mm = today.toLocaleString("en-us", { month: "long" }); //today.getMonth()+1; //January is 0!
    //let yyyy = today.getFullYear();

    this.state = {
      day: dd,
      month: mm
    };
  }
  render() {
    return (
      <div className="calendar-content">
        <div className="icon">
          <FontAwesomeIcon
            icon={faCalendarDay}
            style={{ color: "#1d8384", margin: "0px"}}
          />
          <p>Send your request today</p>
        </div>
        <div className="date">
          <div className="month">{this.state.month}</div>
          <div className="day">{this.state.day}</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
