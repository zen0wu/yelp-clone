import React from "react";

import "./ListView.css";
import { Restaurants } from "../../store";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

export default function ListView() {
  const { restaurants } = Restaurants.useContainer();
  return (
    <div id="list-view" className="ListView">
      {restaurants.map(rest => (
        <RestaurantCard key={rest.id} {...rest} />
      ))}
    </div>
  );
}
