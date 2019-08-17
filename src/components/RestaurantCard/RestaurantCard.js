import React from "react";

import "./RestaurantCard.css";

export default function RestaurantCard(rest) {
  return (
    <div className="Restaurant">
      <div className="RestaurantName">{rest.name}</div>
    </div>
  );
}
