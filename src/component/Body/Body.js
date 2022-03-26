import React, { useEffect, useState } from "react";
import "./Body.css";

import Places from "./Places/Places";
import SideBar from "./SideBar/SideBar";

const Body = () => {
  const [places, setPlaces] = useState([]);
  const [selectionBox, setSelectionBox] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const handleBtn = (place) => {
    const newSelection = [...selectionBox, place];
    setSelectionBox(newSelection);
    console.log(newSelection);
  };

  return (
    <div className="body-container">
      <div className="place-container">
        {places.map((place) => (
          <Places key={place.id} place={place} handleBtn={handleBtn}></Places>
        ))}
      </div>

      <div className="sidebar-container">
        <SideBar places={selectionBox}></SideBar>
      </div>
    </div>
  );
};

export default Body;
