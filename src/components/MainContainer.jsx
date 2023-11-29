import React from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
import Home from "./Home";

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red" element={<Red />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
      </Routes>
      <footer />
    </div>
  );
}

export default MainContainer;
