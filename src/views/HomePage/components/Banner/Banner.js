import React, { useState, useEffect } from "react";
import "./Banner.scss";
import MainBtn from "../../../common/MainBtn/MainBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Static images URLs
    const images = [
      "Images/outsource.png",
      "Images/market.png",
      "Images/trendy.png",
    ];

    // Static decoration images URLs
    const decorationImages = [
      "Images/Decore3.svg",
      "Images/Decore1.svg",
      "Images/Decore2.svg",
    ];

    // Fetch API slides
    fetch("https://api.npoint.io/fee177346e7875554413")
      .then((response) => response.json())
      .then((data) => {
        // Merge API data with static images
        const mergedSlides = data.slides.map((slide, index) => ({
          ...slide,
          imgUrl: images[index],
          decoreUrl: decorationImages[index],
        }));
        setSlides(mergedSlides);
      })
      .catch((error) => console.error("Error fetching slides:", error));
  }, []);

  return (
    <div className="banner">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
              style={{ backgroundColor: `#${slide.colorCode}` }} // Set button background color dynamically
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-bg">
                <img
                  className="carousel-bg-person"
                  src={slide.imgUrl}
                  alt="person-img"
                />
                <img
                  className="carousel-bg-decoration"
                  src={slide.decoreUrl}
                  alt="decoration"
                />
              </div>
              <div className="carousel-caption ">
                <h2
                  className="category"
                  style={{ color: `#${slide.colorCode}` }} // Set button background color dynamically
                >
                  {slide.category}
                </h2>
                <h3 className="title">{slide.title}</h3>
                <p className="brief">{slide.brief}</p>
                <div className="Btn-container mt-5">
                  <MainBtn> Find Out More</MainBtn>
                  <button className="btn play-btn">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="Play-icon"
                    />
                    Play Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
