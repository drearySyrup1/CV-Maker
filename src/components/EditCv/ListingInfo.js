import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

export class ListingInfo extends Component {
  render() {
    console.log(this.props.values.listingTitle);
    return [
      <button
        key="0"
        onClick={() =>
          this.props.deleteListing(
            this.props.values.id,
            this.props.category
          )
        }
        className="span2 deleteListingBtn"
      >
        <span className="mdi mdi-delete mdi-18px"></span>
      </button>,
      <Input
        category={this.props.category}
        id={this.props.values.id}
        name="listingTitle"
        key="1"
        label={this.props.title}
        value={this.props.values.listingTitle}
        changeMainState={this.props.changeListing}
        mainState={false}
      />,
      <Input
        category={this.props.category}
        id={this.props.values.id}
        name="location"
        key="2"
        label={this.props.location}
        value={this.props.values.location}
        changeMainState={this.props.changeListing}
        mainState={false}
      />,
      <Input
        category={this.props.category}
        id={this.props.values.id}
        name="date"
        key="3"
        label={this.props.date}
        value={this.props.values.date}
        changeMainState={this.props.changeListing}
        mainState={false}
      />,
      <Input
        category={this.props.category}
        id={this.props.values.id}
        name="descriptionName"
        key="4"
        label={this.props.descTitle}
        value={this.props.values.descriptionName}
        changeMainState={this.props.changeListing}
        mainState={false}
      />,
      <Input
        category={this.props.category}
        id={this.props.values.id}
        name="description"
        key="5"
        label={this.props.desc}
        value={this.props.values.description}
        changeMainState={this.props.changeListing}
        mainState={false}
      />,
    ];
  }
}

export default ListingInfo;
