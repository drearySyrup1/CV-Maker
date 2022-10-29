import React, { Component } from "react";
import uniqid from "uniqid";

import "./App.css";
import RenderedCV from "./components/RenderedCV/RenderedCV";
import EditCv from "./components/EditCv/EditCv";

class App extends Component {
  state = {
    aboutMe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos nisi optio asperiores quisquam quos fugiat, quia esse consequatur inventore libero tenetur commodi voluptatum doloremque mollitia repudiandae voluptate omnis perspiciatis?",
    links: [
      {
        name: "Facebook",
        link: "facebook.com/robinson",
        id: uniqid(),
      },
      {
        name: "LinkedIn",
        link: "linkedin.com/robinson",
        id: uniqid(),
      },
      {
        name: "Twitter",
        link: "twitter.com/robinson",
        id: uniqid(),
      },
    ],
    firstName: "MICHELLES",
    lastName: "ROBINSON",
    occupation: "GRAPHIC DESIGNER",
    address: "8 Great Fleete Way",
    phoneNumber: "+44 7636 6236",
    email: "test@test.com",
    website: "test.com",
    workEx: [
      {
        listingTitle: "GLOWPIXEL LTD",
        location: "Orlando",
        date: "2015-2016",
        descriptionName: "Senior Graphic Designer",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ratione praesentium facilis iste deleniti recusandae exercitationem eum assumenda impedit molestias.",
        id: uniqid(),
      },
      {
        listingTitle: "LOREM IPSUM",
        location: "New York",
        date: "2014-2015",
        descriptionName: "Graphic Designer",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ratione praesentium facilis iste deleniti recusandae exercitationem eum assumenda impedit molestias.",
        id: uniqid(),
      },
      {
        listingTitle: "PIXELATE AGENCY",
        location: "New Jersey",
        date: "2013-2014",
        descriptionName: "Graphic & Web Designer",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ratione praesentium facilis iste deleniti recusandae exercitationem eum assumenda impedit molestias.",
        id: uniqid(),
      },
    ],
    education: [
      {
        listingTitle: "UNIVERSITY OF UK",
        location: "Toronto",
        date: "2010-2012",
        descriptionName: "Master in Web Develop",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ratione praesentium facilis iste deleniti recusandae exercitationem eum assumenda impedit molestias.",
        id: uniqid(),
      },
      {
        listingTitle: "COLLEGE OF ART",
        location: "New Ark",
        date: "2006-2010",
        descriptionName: "Bachelor in Graphic Design",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ratione praesentium facilis iste deleniti recusandae exercitationem eum assumenda impedit molestias.",
        id: uniqid(),
      },
    ],
  };

  changeAboutMe = (newData) => {
    this.setState({
      aboutMe: newData,
    });
  };

  addLink = () => {
    console.log(this.state.links);
    const localLinks = [...this.state.links];

    console.log(localLinks);
    localLinks.push({
      name: "",
      link: "",
      id: uniqid(),
    });

    this.setState({
      links: localLinks,
    });
  };

  changeLinkName = (newName, id) => {
    const localLinks = [...this.state.links].map((link) => {
      if (link.id === id) {
        return { ...link, name: newName };
      } else {
        return link;
      }
    });

    this.setState({
      links: localLinks,
    });
  };

  changeListing = (category, field, newName, id) => {
    if (
      !(category in this.state) ||
      !(field in this.state[category][0])
    )
      throw new Error("No such state to modify");
    // if (!(field in this.state[category]))
    //   throw new Error("No such state to modify");

    const listings = [...this.state[category]].map((listing) => {
      if (listing.id === id) {
        return { ...listing, [field]: newName };
      } else {
        return listing;
      }
    });

    this.setState({
      [category]: listings,
    });
  };
  changeLinkUrl = (url, id) => {
    const localLinks = [...this.state.links].map((link) => {
      if (link.id === id) {
        return { ...link, link: url };
      } else {
        return link;
      }
    });

    this.setState({
      links: localLinks,
    });
  };

  changeState = (name, newState) => {
    if (name === "links") throw new Error("Cant modify links");
    if (!(name in this.state))
      throw new Error("No such state to modify");
    this.setState({
      [name]: newState,
    });
  };

  deleteListing = (id, category) => {
    console.log(`Delete ${id} from ${category}`);
    if (!(category in this.state))
      throw new Error("No such state to modify");

    const listings = this.state[category].filter((item) => {
      if (item.id === id) return false;
      else return true;
    });
    console.log(listings);

    this.setState({
      [category]: listings,
    });
  };

  addNewListing = (category) => {
    console.log("called");
    if (!(category in this.state))
      throw new Error("No such state to modify");

    const listings = [...this.state[category]];

    listings.push({
      listingTitle: "",
      location: "",
      date: "",
      descriptionName: "",
      description: "",
      id: uniqid(),
    });

    this.setState({
      [category]: listings,
    });
  };

  render() {
    return (
      <div className="App">
        <EditCv
          aboutMe={this.state.aboutMe}
          links={this.state.links}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          occupation={this.state.occupation}
          address={this.state.address}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          website={this.state.website}
          changeAboutMe={this.changeAboutMe}
          editLinkName={this.changeLinkName}
          addNewLink={this.addLink}
          editLinkUrl={this.changeLinkUrl}
          changeMainState={this.changeState}
          workEx={this.state.workEx}
          education={this.state.education}
          changeListing={this.changeListing}
          addNewListing={this.addNewListing}
          deleteListing={this.deleteListing}
        />
        <RenderedCV
          aboutMe={this.state.aboutMe}
          links={this.state.links}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          occupation={this.state.occupation}
          address={this.state.address}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          website={this.state.website}
          workEx={this.state.workEx}
          education={this.state.education}
        />
      </div>
    );
  }
}

export default App;
