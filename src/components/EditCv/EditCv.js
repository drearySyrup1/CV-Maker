import React, { Component } from "react";
import Link from "./Link";
import Input from "./Input";
import "./editcv.css";
import uniqid from "uniqid";
import ListingInfo from "./ListingInfo";
import { computeHeadingLevel } from "@testing-library/react";

export class EditCv extends Component {
  state = {
    aboutMe: this.props.aboutMe,
  };

  handleAboutMeChange(e) {
    this.setState(
      {
        aboutMe: e.target.value,
      },
      () => {
        this.props.changeAboutMe(this.state.aboutMe);
      }
    );
  }

  render() {
    console.log("editCV props");
    console.log(this.props.workEx);
    return (
      <div className="editCV">
        <Input
          name="aboutMe"
          label="About Me"
          value={this.state.aboutMe}
          changeMainState={this.props.changeMainState}
        />

        {/* genreate existing links */}
        {this.props.links.map((link, i) => {
          const index = i + 1;
          return (
            <Link
              key={link.id}
              id={link.id}
              label={`Link ${index}`}
              name={link.name}
              link={link.link}
              editLinkName={this.props.editLinkName}
              editLinkUrl={this.props.editLinkUrl}
            />
          );
        })}

        <button
          onClick={this.props.addNewLink}
          className="btn span2"
        >
          Add Link
        </button>

        <div className="line span2"></div>

        <Input
          name="firstName"
          label="Name"
          value={this.props.firstName}
          changeMainState={this.props.changeMainState}
        />
        <Input
          name="lastName"
          label="Surname"
          value={this.props.lastName}
          changeMainState={this.props.changeMainState}
        />
        <Input
          name="occupation"
          label="Qualification"
          value={this.props.occupation}
          changeMainState={this.props.changeMainState}
        />
        <Input
          name="address"
          label="Address"
          value={this.props.address}
          changeMainState={this.props.changeMainState}
        />
        <Input
          name="phoneNumber"
          label="Phone number"
          value={this.props.phoneNumber}
          changeMainState={this.props.changeMainState}
        />
        <Input
          name="email"
          label="Email"
          value={this.props.email}
          changeMainState={this.props.changeMainState}
        />
        <Input
          name="website"
          label="Website"
          value={this.props.website}
          changeMainState={this.props.changeMainState}
        />

        <div className="line span2"></div>

        {this.props.workEx.map((job, i) => {
          let line;
          if (i !== this.props.workEx.length - 1) {
            line = (
              <div key="workline" className="line span2"></div>
            );
          } else {
            line = null;
          }
          return [
            <ListingInfo
              key={i}
              title="Company"
              location="Location"
              date="Date"
              descTitle="Role"
              desc="Description"
              values={job}
              changeListing={this.props.changeListing}
              category="workEx"
              deleteListing={this.props.deleteListing}
            />,
            line,
          ];
        })}

        <button
          onClick={() => this.props.addNewListing("workEx")}
          className="btn span2"
        >
          Add Work Experience
        </button>

        <div className="line span2"></div>

        {this.props.education.map((ed, i) => {
          let line;
          if (i !== this.props.education.length - 1) {
            line = (
              <div key="workline" className="line span2"></div>
            );
          } else {
            line = null;
          }
          return [
            <ListingInfo
              key={i}
              title="University"
              location="Location"
              date="Date"
              descTitle="Study Name"
              desc="Description"
              values={ed}
              changeListing={this.props.changeListing}
              category="education"
              deleteListing={this.props.deleteListing}
            />,
            line,
          ];
        })}

        <button
          onClick={() => this.props.addNewListing("education")}
          className="btn span2"
        >
          Add Education
        </button>

        <div key="workline" className="line span2"></div>
      </div>
    );
  }
}

export default EditCv;
