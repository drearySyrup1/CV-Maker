import React from "react";
import Links from "./Links";
import AboutMe from "./AboutMe";
import Heading from "./Heading/Heading";
import Photo from "./Photo";
import Listings from "./Listings/Listings";
import "./CV.css";

export function RenderedCV(props) {
  const renderListings = (sectionName, listings) => {
    if (listings.length <= 0) return null;
    return (
      <Listings sectionName={sectionName} listings={listings} />
    );
  };

  return (
    <div id="CV" className="renderedCV">
      <div className="main-left">
        <Photo />
        <AboutMe value={props.aboutMe} />
        <div className="line inverted"></div>
        <Links links={props.links} />
      </div>
      <div className="main-right">
        <Heading
          firstName={props.firstName}
          lastName={props.lastName}
          occupation={props.occupation}
          address={props.address}
          phoneNumber={props.phoneNumber}
          email={props.email}
          website={props.website}
        />
        <div className="line"></div>
        {renderListings("WORK EXPERIENCE", props.workEx)}

        <div className="line"></div>

        {renderListings("EDUCATION", props.education)}
      </div>
    </div>
  );
}

export default RenderedCV;
