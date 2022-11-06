import React from "react";
import Input from "./Input";
import uniqid from "uniqid";

export function ListingInfo(props) {
  return [
    <button
      key="0"
      onClick={() =>
        props.deleteListing(props.values.id, props.category)
      }
      className="span2 deleteListingBtn"
    >
      <span className="mdi mdi-delete mdi-18px"></span>
    </button>,
    <Input
      category={props.category}
      id={props.values.id}
      name="listingTitle"
      key="1"
      label={props.title}
      value={props.values.listingTitle}
      changeMainState={props.changeListing}
      mainState={false}
    />,
    <Input
      category={props.category}
      id={props.values.id}
      name="location"
      key="2"
      label={props.location}
      value={props.values.location}
      changeMainState={props.changeListing}
      mainState={false}
    />,
    <Input
      category={props.category}
      id={props.values.id}
      name="date"
      key="3"
      label={props.date}
      value={props.values.date}
      changeMainState={props.changeListing}
      mainState={false}
    />,
    <Input
      category={props.category}
      id={props.values.id}
      name="descriptionName"
      key="4"
      label={props.descTitle}
      value={props.values.descriptionName}
      changeMainState={props.changeListing}
      mainState={false}
    />,
    <Input
      category={props.category}
      id={props.values.id}
      name="description"
      key="5"
      label={props.desc}
      value={props.values.description}
      changeMainState={props.changeListing}
      mainState={false}
    />,
  ];
}

export default ListingInfo;
