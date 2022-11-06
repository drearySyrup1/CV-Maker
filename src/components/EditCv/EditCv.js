import React from "react";
import Link from "./Link";
import Input from "./Input";
import "./editcv.css";
import uniqid from "uniqid";
import ListingInfo from "./ListingInfo";

export function EditCv(props) {
  return (
    <div className="editCV">
      <Input
        name="aboutMe"
        label="About Me"
        value={props.aboutMe}
        changeMainState={props.changeMainState}
      />

      {/* genreate existing links */}
      {props.links.map((link, i) => {
        const index = i + 1;
        return (
          <Link
            key={link.id}
            id={link.id}
            label={`Link ${index}`}
            name={link.name}
            link={link.link}
            editLinkName={props.editLinkName}
            editLinkUrl={props.editLinkUrl}
            deleteLink={props.deleteLink}
          />
        );
      })}

      <button onClick={props.addNewLink} className="btn span2">
        Add Link
      </button>

      <div className="line span2"></div>

      <Input
        name="firstName"
        label="Name"
        value={props.firstName}
        changeMainState={props.changeMainState}
      />
      <Input
        name="lastName"
        label="Surname"
        value={props.lastName}
        changeMainState={props.changeMainState}
      />
      <Input
        name="occupation"
        label="Qualification"
        value={props.occupation}
        changeMainState={props.changeMainState}
      />
      <Input
        name="address"
        label="Address"
        value={props.address}
        changeMainState={props.changeMainState}
      />
      <Input
        name="phoneNumber"
        label="Phone number"
        value={props.phoneNumber}
        changeMainState={props.changeMainState}
      />
      <Input
        name="email"
        label="Email"
        value={props.email}
        changeMainState={props.changeMainState}
      />
      <Input
        name="website"
        label="Website"
        value={props.website}
        changeMainState={props.changeMainState}
      />

      <div className="line span2"></div>

      {props.workEx.map((job, i) => {
        let line;
        if (i !== props.workEx.length - 1) {
          line = <div key="workline" className="line span2"></div>;
        } else {
          line = null;
        }
        return [
          <ListingInfo
            key={job.id}
            title="Company"
            location="Location"
            date="Date"
            descTitle="Role"
            desc="Description"
            values={job}
            changeListing={props.changeListing}
            category="workEx"
            deleteListing={props.deleteListing}
          />,
          line,
        ];
      })}

      <button
        onClick={() => props.addNewListing("workEx")}
        className="btn span2"
      >
        Add Work Experience
      </button>

      <div className="line span2"></div>

      {props.education.map((ed, i) => {
        let line;
        if (i !== props.education.length - 1) {
          line = <div key="workline" className="line span2"></div>;
        } else {
          line = null;
        }
        return [
          <ListingInfo
            key={ed.id}
            title="University"
            location="Location"
            date="Date"
            descTitle="Study Name"
            desc="Description"
            values={ed}
            changeListing={props.changeListing}
            category="education"
            deleteListing={props.deleteListing}
          />,
          line,
        ];
      })}

      <button
        onClick={() => props.addNewListing("education")}
        className="btn span2"
      >
        Add Education
      </button>

      <div key="workline" className="line span2"></div>
    </div>
  );
}

export default EditCv;
