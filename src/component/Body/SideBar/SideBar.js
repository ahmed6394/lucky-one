import React from "react";
import "./SideBar.css";

const SideBar = ({ selectionBox }) => {
  // const { name, id } = props;
  console.log(selectionBox);

  const handleRandomPlace = () => {
    console.log("clicled");
  };
  const handleRemoveBtn = () => {
    selectionBox = [];
    console.log("remove button clicled");
  };
  return (
    <div className="selection-box">
      {selectionBox.map((place) => (
        <h3>{place.name}</h3>
      ))}
      <div>
        <button onClick={handleRandomPlace} className="random-btn">
          Random Selection
        </button>
        <button onClick={handleRemoveBtn} className="remove-btn">
          Remove Selections
        </button>
      </div>
      <h4>Your should go there: {}</h4>
    </div>
  );
};

export default SideBar;
