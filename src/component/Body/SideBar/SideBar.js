import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div>
      <h1>selected places: {props}</h1>
    </div>
  );
};

export default SideBar;
