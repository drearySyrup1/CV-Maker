import React, { Component } from "react";
import Links from "./Links";
import AboutMe from "./AboutMe";
import Heading from "./Heading/Heading";
import Photo from "./Photo";
import Listings from "./Listings/Listings";
import "./CV.css";

export class RenderedCV extends Component {
  renderListings = (sectionName, listings) => {
    if (listings.length <= 0) return null;
    return (
      <Listings sectionName={sectionName} listings={listings} />
    );
  };

  render() {
    return (
      <div id="CV" className="renderedCV">
        <div className="main-left">
          <Photo />
          <AboutMe value={this.props.aboutMe} />
          <div className="line inverted"></div>
          <Links links={this.props.links} />
        </div>
        <div className="main-right">
          <Heading
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            occupation={this.props.occupation}
            address={this.props.address}
            phoneNumber={this.props.phoneNumber}
            email={this.props.email}
            website={this.props.website}
          />
          <div className="line"></div>
          {this.renderListings(
            "WORK EXPERIENCE",
            this.props.workEx
          )}

          <div className="line"></div>

          {this.renderListings("EDUCATION", this.props.education)}
        </div>
      </div>
    );
  }
}

export default RenderedCV;
