import React from "react";
import { createContainer } from "unstated-next";

import { YELP_API_KEY } from "./constants";

function useRestaurantState() {
  const [restaurants, setRestaurants] = React.useState([]);
  return { restaurants, setRestaurants };
}

export const Restaurants = createContainer(useRestaurantState);

export async function fetchRestaurants(latitude, longitude) {
  const queryParams = {
    latitude,
    longitude,
    categories: "restaurants",
    sort_by: "distance",
    limit: 10
  };
  const queryString = Object.entries(queryParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  const yelpUrl = `/v3/businesses/search?${queryString}`;
  const res = await fetch(yelpUrl, {
    headers: { Authorization: `Bearer ${YELP_API_KEY}` }
  });
  return (await res.json()).businesses;
}
