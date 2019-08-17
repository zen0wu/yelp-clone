import React from "react";
import GoogleMap from "google-map-react";

import { GOOGLE_API_KEY } from "../../constants";
import { Restaurants } from "../../store";
import SearchBox from "../SearchBox/SearchBox";
import UseMyLocation from "../UseMyLocation/UseMyLocation";

import "./MapView.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

export default function MapView() {
  const [api, setApi] = React.useState(undefined);
  const { restaurants } = Restaurants.useContainer();

  return (
    <div id="map-view" className="MapView">
      <GoogleMap
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: GOOGLE_API_KEY, libraries: ["places"] }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={11}
        onGoogleApiLoaded={setApi}
      >
        {restaurants.map(rest => (
          <div
            className="Marker"
            key={rest.id}
            lat={rest.coordinates.latitude}
            lng={rest.coordinates.longitude}
          >
            <div className="Card">
              <RestaurantCard {...rest} />
            </div>
          </div>
        ))}
      </GoogleMap>
      <div className="SearchBoxContainer">
        <SearchBox api={api} />
      </div>
      <div className="UseMyLocationContainer">
        <UseMyLocation />
      </div>
    </div>
  );
}
