import React from "react";

import "./MapView.css";
import SearchBox from "../SearchBox/SearchBox";
import UseMyLocation from "../UseMyLocation/UseMyLocation";

export default function MapView() {
  return (
    <div id="map-view" className="MapView">
      Map with restaurants
      <div className="SearchBoxContainer">
        <SearchBox />
      </div>
      <div className="UseMyLocationContainer">
        <UseMyLocation />
      </div>
    </div>
  );
}
