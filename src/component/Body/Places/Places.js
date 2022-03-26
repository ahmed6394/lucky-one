import React from "react";
import "./Places.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

const Places = (props) => {
  //   console.log(props);
  const { name, img, budget } = props.place;
  return (
    <div className="place">
      <img src={img} alt=""></img>
      <div className="place-details">
        <p className="place-name">{name}</p>
        <p>Budget: {budget} ৳</p>
      </div>
      <button onClick={() => props.handleBtn(props.place)} className="btn">
        <p>Lets go there</p>
        <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Places;
