import React, { Component } from "react";
//import AuthService from "../auth/AuthService";

class ShopSignup extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>
            Business Name
            <input
              type="text"
              name="businessname"
              //value={this.state.businessname}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            <input
              type="text"
              name="firstname"
              //value={this.state.firstname}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            <input
              type="text"
              name="lastnanme"
              //value={this.state.lastnanme}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            <input
              type="text"
              name="username"
              //value={this.state.username}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              //value={this.state.password}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            <select>
              <option value="Owner">Owner</option>
              <option value="Manager">Manager</option>
              <option value="Assistance">Assitant</option>
              <option value="Apprentice">Apprentice</option>
            </select>
          </label>
          <label>
            Address:
            <input
              type="text"
              name="streetname"
              //value={this.state.address.streetname}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            Postcode:
            <input
              type="text"
              name="postcode"
              //value={this.state.address.postcode}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              //value={this.state.address.city}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={this.state.address.state}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              //value={this.state.address.country}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>
            Phone number:
            <input
              type="text"
              name="phonenumber"
              //value={this.state.phonenumber}
              onChange={e => this.changeHandler(e)}
            />
          </label>
          <label>Consumer goods services</label>
          <br />
          <input type="checkbox" name="repairtype" value="Shoe maker" />
          Shoe maker
          <br />
          <input type="checkbox" name="repairtype" value="Bags maker" />
          Bags maker
          <br />
          <input type="checkbox" name="repairtype" value="Phone Repair" />
          Phone Repair
          <br />
          <input type="checkbox" name="repairtype" value="Computer Repair" />
          Computer Repair <br />
          <input type="checkbox" name="repairtype" value="Tailor" />
          Tailor
          <br />
          <input type="checkbox" name="repairtype" value="Bags maker" />
          Bags maker
          <br />
          <label>Home Services </label>
          <br />
          <input type="checkbox" name="repairtype" value="Movers" />
          Movers
          <br />
          <input type="checkbox" name="repairtype" value="Home Cleaning" />
          Home Cleaning
          <br />
          <input type="checkbox" name="repairtype" value="Carpenter" />
          Carpenter
          <br />
          <input type="checkbox" name="repairtype" value="Handyman" />
          Handyman <br />
          <input type="checkbox" name="repairtype" value="Painter" />
          Painter
          <br />
          <input type="checkbox" name="repairtype" value="Gardenerr" />
          Gardenerr
          <br />
          <label>Vehicles services </label>
          <br />
          <input type="checkbox" name="repairtype" value="Car Glass" />
          Car Glass
          <br />
          <input type="checkbox" name="repairtype" value="Car Painter" />
          Car Painter <br />
          <input type="checkbox" name="repairtype" value="Carpenter" />
          Carpenter
          <br />
          <input type="checkbox" name="repairtype" value="Scooter Repair" />
          Scooter Repair
          <br />
          <input type="checkbox" name="repairtype" value="Bike Repair" />
          Bike Repair
          <br />
          <input type="checkbox" name="repairtype" value="Bike Painter" />
          Bike Painter
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ShopSignup;
