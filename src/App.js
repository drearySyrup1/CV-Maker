import React, { useState, useReducer } from "react";
import uniqid from "uniqid";

import "./App.css";
import RenderedCV from "./components/RenderedCV/RenderedCV";
import EditCv from "./components/EditCv/EditCv";

//RECUCER CODE START -------------------------------------

const ACTIONS = {
  changeListing: "changeListing",
  deleteListing: "deleteListing",
  addListing: "addListing",
};

function personInfoReducer(state, action) {
  const temp = {
    ...state,
    [action.payload.name]: action.payload.value,
  };

  return temp;
}

function listingsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.changeListing:
      return handleListingChange(state, action);

    case ACTIONS.deleteListing:
      return handleListingDelete(state, action);

    case ACTIONS.addListing:
      return handleAddListing(state, action);
    default:
      return state;
  }
}

function handleListingChange(state, action) {
  const listings = [...state[action.payload.category]].map(
    (listing) => {
      if (listing.id === action.payload.id) {
        return {
          ...listing,
          [action.payload.field]: action.payload.newName,
        };
      } else {
        return listing;
      }
    }
  );

  return { ...state, [action.payload.category]: listings };
}

function handleListingDelete(state, action) {
  const listings = state[action.payload.category].filter((item) => {
    if (item.id === action.payload.id) return false;
    else return true;
  });

  return { ...state, [action.payload.category]: listings };
}

function handleAddListing(state, action) {
  const listings = [...state[action.payload.category]];
  listings.push({
    listingTitle: "",
    location: "",
    date: "",
    descriptionName: "",
    description: "",
    id: uniqid(),
  });
  return { ...state, [action.payload.category]: listings };
}

//RECUCER CODE END -------------------------------------

function App() {
  const [aboutMe, setAboutMe] = useState();
  const [links, setLinks] = useState([
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
  ]);

  const [personInfo, dispatchPersonInfo] = useReducer(
    personInfoReducer,
    {
      aboutMe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos nisi optio asperiores quisquam quos fugiat, quia esse consequatur inventore libero tenetur commodi voluptatum doloremque mollitia repudiandae voluptate omnis perspiciatis?",
      firstName: "MICHELLES",
      lastName: "ROBINSON",
      occupation: "GRAPHIC DESIGNER",
      address: "8 Great Fleete Way",
      phoneNumber: "+44 7636 6236",
      email: "test@test.com",
      website: "test.com",
    }
  );

  const [listings, dispatchListing] = useReducer(listingsReducer, {
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
  });

  const changeAboutMe = (newData) => {
    setAboutMe(newData);
  };

  const addLink = () => {
    const localLinks = [...links];

    localLinks.push({
      name: "",
      link: "",
      id: uniqid(),
    });

    setLinks(localLinks);
  };

  const changeLinkName = (newName, id) => {
    const localLinks = [...links].map((link) => {
      if (link.id === id) {
        return { ...link, name: newName };
      } else {
        return link;
      }
    });

    setLinks(localLinks);
  };

  const changeLinkUrl = (url, id) => {
    const localLinks = [...links].map((link) => {
      if (link.id === id) {
        return { ...link, link: url };
      } else {
        return link;
      }
    });

    setLinks(localLinks);
  };

  const deleteLink = (id) => {
    const localLinks = links.filter((link) => {
      if (link.id === id) return false;
      else return true;
    });

    setLinks(localLinks);
  };

  const changeState = (name, newState) => {
    dispatchPersonInfo({ payload: { name, value: newState } });
  };

  const changeListing = (category, field, newName, id) => {
    dispatchListing({
      type: ACTIONS.changeListing,
      payload: {
        category,
        field,
        newName,
        id,
      },
    });
  };

  const deleteListing = (id, category) => {
    dispatchListing({
      type: ACTIONS.deleteListing,
      payload: {
        category,
        id,
      },
    });
  };

  const addNewListing = (category) => {
    dispatchListing({
      type: ACTIONS.addListing,
      payload: {
        category,
      },
    });
  };

  return (
    <div className="App">
      <EditCv
        aboutMe={personInfo.aboutMe}
        links={links}
        firstName={personInfo.firstName}
        lastName={personInfo.lastName}
        occupation={personInfo.occupation}
        address={personInfo.address}
        phoneNumber={personInfo.phoneNumber}
        email={personInfo.email}
        website={personInfo.website}
        changeAboutMe={changeAboutMe}
        editLinkName={changeLinkName}
        addNewLink={addLink}
        editLinkUrl={changeLinkUrl}
        changeMainState={changeState}
        workEx={listings.workEx}
        education={listings.education}
        changeListing={changeListing}
        addNewListing={addNewListing}
        deleteListing={deleteListing}
        deleteLink={deleteLink}
      />
      <RenderedCV
        aboutMe={personInfo.aboutMe}
        links={links}
        firstName={personInfo.firstName}
        lastName={personInfo.lastName}
        occupation={personInfo.occupation}
        address={personInfo.address}
        phoneNumber={personInfo.phoneNumber}
        email={personInfo.email}
        website={personInfo.website}
        workEx={listings.workEx}
        education={listings.education}
      />
    </div>
  );
}

export default App;
