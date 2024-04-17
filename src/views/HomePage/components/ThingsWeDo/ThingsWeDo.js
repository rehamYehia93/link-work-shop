import React, { useState, useEffect } from "react";
import "./ThingsWeDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ThingsWeDo = () => {
  // const [thingsDo, setThingsDo] = useState([]);
  // useEffect(() => {
  //   // Fetch things Do
  //   fetch("./data/thingsWeDo.json")
  //     .then((response) => response.json())
  //     .then((data) => setThingsDo(data))
  //     .catch((error) => console.error("Error fetching things do:", error));
  // }, []);
  const thingsDo = {
    title: "We Deliver ",
    subTitle: "Digital Productivity",
    description:
      "We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners.",
    activityList: [
      {
        id: 1,
        name: "Transformation",
        path: "#",
        img: "./Images/Transformation.png",
      },
      {
        id: 2,
        name: "Envision",
        path: "#",
        img: "./Images/Envision.png",
      },
      {
        id: 3,
        name: "Dynamics 365",
        path: "#",
        img: "./Images/Dynamics.png",
      },
      {
        id: 4,
        name: "Crafty Mind",
        path: "#",
        img: "./Images/Crafty.png",
      },
      {
        id: 5,
        name: "Services",
        path: "#",
        img: "./Images/Services.png",
      },
    ],
  };

  return (
    <div className="ThingsWeDo">
      <p className="bg-text"> Things We Do</p>
      <div className="bg-color" />
      <div className="container text-container">
        <div className="row g-0">
          <div className="col-lg-5 col-md-12 col-sm-12 order-lg-2">
            <div className="header text-lg-end text-md-start my-5 py-5">
              <h2 className="fw-bolder title">{thingsDo.title}</h2>
              <h3 className="fw-bolder mb-4 title">{thingsDo.subTitle}</h3>
              <p className=" fs-3  text-light">{thingsDo.description}</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 order-lg-1">
            <div className="row g-0">
              <div className="col-lg-4 col-md-12">
                <div className="cards-col-container">
                  {thingsDo.activityList.slice(0, 1).map((activity) => (
                    <div className="do-card">
                      <h2 className="do-text text-light bolder fs-3">
                        {activity.name}
                      </h2>
                      <p className="do-text-stroke bold fs-2">
                        {activity.name}
                      </p>
                      <img
                        className="do-img"
                        src={activity.img}
                        alt={activity.name}
                      />
                      <div className="do-overlay">
                        <p className="read-more">
                          <FontAwesomeIcon icon={faArrowRight} /> Read more
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="cards-2-col-container">
                  {thingsDo.activityList.slice(1, 3).map((activity) => (
                    <div className="do-card">
                      <h2 className="do-text text-light bolder fs-3">
                        {activity.name}
                      </h2>
                      <p className="do-text-stroke bold fs-2">
                        {activity.name}
                      </p>
                      <img
                        className="do-img"
                        src={activity.img}
                        alt={activity.name}
                      />
                      <div className="do-overlay">
                        <p className="read-more">
                          <FontAwesomeIcon icon={faArrowRight} /> Read more
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div>
                  {thingsDo.activityList.slice(3).map((activity) => (
                    <div className="do-card">
                      <h2 className="do-text text-light bolder fs-3">
                        {activity.name}
                      </h2>
                      <p className="do-text-stroke bold fs-2">
                        {activity.name}
                      </p>
                      <img
                        className="do-img"
                        src={activity.img}
                        alt={activity.name}
                      />
                      <div className="do-overlay">
                        <p className="read-more">
                          <FontAwesomeIcon icon={faArrowRight} /> Read more
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsWeDo;
