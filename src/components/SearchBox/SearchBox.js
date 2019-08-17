import React from "react";
import ReactDOM from "react-dom";

import { Restaurants, fetchRestaurants } from "../../store";

import "./SearchBox.css";

export default function SearchBox({ api }) {
  const ref = React.useRef();
  const searchBox = React.useRef();
  const { setRestaurants } = Restaurants.useContainer();
  const placesChanged = React.useCallback(() => {
    if (!api) {
      return;
    }
    const place = searchBox.current.getPlaces()[0];
    api.map.fitBounds(place.geometry.viewport);

    fetchRestaurants(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    ).then(setRestaurants);
  }, [api, setRestaurants]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    const input = ReactDOM.findDOMNode(ref.current);
    searchBox.current = new api.maps.places.SearchBox(input);
    searchBox.current.addListener("places_changed", placesChanged);
  }, [api, placesChanged, searchBox]);
  return (
    <input
      id="search-box"
      ref={ref}
      className="SearchBox"
      type="text"
      placeholder="Search for restraurant"
    />
  );
}
