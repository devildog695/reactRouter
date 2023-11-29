import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <h1>Color Picker on Steroids</h1>
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
