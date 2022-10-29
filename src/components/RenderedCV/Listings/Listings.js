import React, { Component } from "react";
import Listing from "./Listing";
import "./Listings.css";

export class Listings extends Component {
  render() {
    return (
      <div className="WorkEx">
        <h2>{this.props.sectionName}</h2>
        <div className="work-list">
          {this.props.listings.map((listing, i) => {
            return (
              <Listing
                key={i}
                title={listing.listingTitle}
                location={listing.location}
                date={listing.date}
                descTitle={listing.descriptionName}
                desc={listing.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Listings;
