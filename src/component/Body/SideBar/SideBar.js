import React from "react";
import "./SideBar.css";

const SideBar = ({ places }) => {
  // console.log(props);
  return (
    <div className="selection-box">
      <h1>selected places:{places.length}</h1>
    </div>
  );
};

export default SideBar;
