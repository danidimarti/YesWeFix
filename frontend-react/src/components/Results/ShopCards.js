import React, { Component } from "react";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "./ShopCards.css";

export class ShopCards extends Component {
  render() {
    const { shopResults } = this.props;

    console.log(shopResults, "Cards");
    
    return (
      <div>
        {shopResults.map((shop, index) => (
          <div key={shop._id} className={`containerStyle `}>
            
            <div
              className={`card cardStyle ${
                this.props.active === shop.id ? "active" : ""
              }`}
              style={{ borderRadius: "0" }}
            >
              <div
                className="card-image"
                style={{
                  backgroundImage: `url("${shop.imageUrl}")`,
                  borderRadius: "0"
                }}
              />
              {/* <img
                src={shop.imageUrl}
                alt="Selected Shop"
                // style={{ borderRadius: "0" }}
                
                className="card-img-top"
              /> */}
              <div className="card-body">
                <h2 className="card-title">{shop.shopname}</h2>
                <p className="card-text">{shop.repairtype}</p>
              </div>
              <Link to={`/results/${shop._id}`}>
              <input
                      id="see shop-btn"
                      className="btn-form btn-info"
                      type="submit"
                      value="See Shop"
                      // onClick={this.handleSubmit}
                    />
                  </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShopCards;
