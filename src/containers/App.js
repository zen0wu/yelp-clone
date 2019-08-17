import React from "react";

import ListView from "../components/ListView/ListView";
import MapView from "../components/MapView/MapView";

import { Restaurants } from "../store";
import "./App.css";

function App() {
  return (
    <Restaurants.Provider>
      <div className="App">
        <ListView />
        <MapView />
      </div>
    </Restaurants.Provider>
  );
}

export default App;
