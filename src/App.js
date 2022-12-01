import React from "react";
import Header from "./components/Header"
import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Banner3 from "./components/Banner3"
import Banner4 from "./components/Banner4"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Footer/>
    </div>
  );
}