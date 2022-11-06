import React from "react";
import Listing from "./Listing";
import "./Listings.css";

export function Listings(props) {
  return (
    <div className="WorkEx">
      <h2>{props.sectionName}</h2>
      <div className="work-list">
        {props.listings.map((listing, i) => {
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

export default Listings;
