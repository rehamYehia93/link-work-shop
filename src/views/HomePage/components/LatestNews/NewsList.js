import React, { useState, useEffect } from "react";
import MainBtn from "../../../common/MainBtn/MainBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const NewsList = ({ news, selectedCategory }) => {
  const [showAllNews, setShowAllNews] = useState(false);
  const [heartIcons, setHeartIcons] = useState([]);
  const [showSocialIconsIndex, setShowSocialIconsIndex] = useState(null);
  const [showSocialIcons, setShowSocialIcons] = useState(false); // State to control visibility of social icons

  useEffect(() => {
    // Initialize heartIcons state with the same length as latestNews
    setHeartIcons(
      news.map(() => ({
        icon: farHeart,
        hover: false,
      }))
    );
  }, [news]);

  const placeholderImage = "https://via.placeholder.com/150";
  // filter news with Category when click to Category tab
  const filteredNews = selectedCategory
    ? news.filter((item) => item.categoryID === selectedCategory.id)
    : news;

  // sorted News with latest
  const sortedNews = filteredNews.sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  // formattedDate like design
  const formattedDate = (dateString) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date(dateString);
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${day} ${dayOfMonth} ${month} ${year}`;
  };

  const latestNews = showAllNews ? sortedNews : sortedNews.slice(0, 6);

  const handleShowAllNews = () => {
    setShowAllNews((prevShowAllNews) => !prevShowAllNews);
  };

  const handleHeartIconClick = (index) => {
    setHeartIcons((prevHeartIcons) => {
      const newHeartIcons = [...prevHeartIcons];
      newHeartIcons[index].icon = faHeart;
      return newHeartIcons;
    });
  };

  const handleHeartIconHover = (index, hover) => {
    setHeartIcons((prevHeartIcons) => {
      const newHeartIcons = [...prevHeartIcons];
      newHeartIcons[index].hover = hover;
      return newHeartIcons;
    });
  };

  const handleShareButtonClick = (index) => {
    setShowSocialIconsIndex(index);
    setShowSocialIcons(true); // Show social icons when share button is clicked
  };
  // Hide social icons when any button in the group is clicked
  const handleCloseSocialIcons = () => {
    setShowSocialIcons(false);
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-5">
        {latestNews.map((item, index) => (
          <div className="col" key={item.id}>
            <div className="card h-100 border-0 shadow rounded-4 text-start">
              <img
                src={item.urlToImage ? item.urlToImage : placeholderImage}
                alt={item.title}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
              </div>
              <div className="card-footer border-top-0">
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="me-2 main-color"
                  />
                  <p className="m-0 blue-grey-color">
                    {formattedDate(item.publishedDate)}
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between ">
                  <span className="badge rounded-pill me-2 px-3 py-1">
                    {/* add 'Category' text untill fiter work good  */}
                    {item.category || "Category"}
                  </span>
                  <div className="action-btns-container">
                    <button
                      className="btn action-btn border-0 me-2"
                      onClick={() => handleHeartIconClick(index)}
                      onMouseEnter={() => handleHeartIconHover(index, true)}
                      onMouseLeave={() => handleHeartIconHover(index, false)}
                    >
                      <FontAwesomeIcon
                        icon={
                          heartIcons[index]?.hover
                            ? faHeart
                            : heartIcons[index]?.icon
                        }
                      />
                    </button>
                    <button
                      className="btn action-btn border-0 me-2"
                      onClick={() => handleShareButtonClick(index)}
                    >
                      <FontAwesomeIcon icon={faShare} />
                    </button>
                    {showSocialIcons && showSocialIconsIndex === index && (
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="social-icon"
                            onClick={handleCloseSocialIcons}
                          />
                        </button>
                        <button
                          type="button"
                          className="btn btn-info text-light"
                          onClick={handleCloseSocialIcons}
                        >
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="social-icon"
                          />
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleCloseSocialIcons}
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="social-icon"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MainBtn onClick={handleShowAllNews}>
        {showAllNews ? "Show Latest News" : "Show All News"}
      </MainBtn>
    </div>
  );
};

export default NewsList;
