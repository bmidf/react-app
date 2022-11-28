import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
  <div className="topnav">
    <a href="#default" className="logo">LOGO</a>
    <a className="active" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <input type="text" placeholder="Search.."></input>
  </div>
  );
}
