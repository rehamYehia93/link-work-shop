// src/HomePage.js
import React from "react";
import Banner from "./components/Banner/Banner";
import ThingsWeDo from "./components/ThingsWeDo/ThingsWeDo";
import LatestNews from "./components/LatestNews/LatestNews";
import "./HomePage.scss"; // Import the stylesheet for HomePage component

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <ThingsWeDo />
      <LatestNews />
    </div>
  );
};

export default HomePage;
