import React from "react";

import Header from "./components/Header"
import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Banner2/>
      {/*<ShoppingList name="mark"/>*/}
    </div>

  );
}