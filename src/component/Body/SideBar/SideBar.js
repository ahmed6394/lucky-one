import React from "react";
import "./SideBar.css";

const SideBar = ({ selectionBox }) => {
  // const { name, id } = props;
  console.log(selectionBox.id);
  const handleRandomPlace = () => {
    console.log("clicled");
  };
  return (
    <div className="selection-box">
      {selectionBox.map((place) => (
        <h1>{place.name}</h1>
      ))}
      <div>
        <button onClick={handleRandomPlace} className="random-btn">
          Random Selection
        </button>
      </div>
    </div>
  );
};

export default SideBar;
