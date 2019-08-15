import React from "react";

import "./UseMyLocation.css";
import MyLocation from "./MyLocation.svg";

export default function UseMyLocation() {
  return (
    <div className="UseMyLocation">
      <img className="MyLocationIcon" src={MyLocation} alt="Use My Location" />
    </div>
  );
}
