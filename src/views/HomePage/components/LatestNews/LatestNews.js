import React, { useState, useEffect } from "react";
import NewsTabs from "./NewsTabs";
import NewsList from "./NewsList";
import "./LatestNews.scss";

const LatestNews = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch categories
    fetch("https://api.npoint.io/91298d970c27e9a06518")
      .then((response) => response.json())
      .then((data) => setCategories(data.newsCategory))
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch news list
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/d275425a434e02acf2f7"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const data = await response.json();
        const filteredNews = data.News.filter(
          (article) => article.showOnHomepage === "yes"
        );
        setNews(filteredNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="news-section py-5 mb-3">
      <div className="container">
        <div className="header">
          <p className="fw-bolder fs-4 mb-2 blue-grey-color">Media</p>
          <h2 className="fw-bolder fs-1 mb-4">Top News</h2>
        </div>
        <NewsTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryClick}
        />
        <div className="tab-content">
          <div
            className={`tab-pane fade ${
              selectedCategory === null ? "show active" : ""
            }`}
            id="all"
          >
            <NewsList news={news} selectedCategory={null} />
          </div>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`tab-pane fade ${
                selectedCategory === category ? "show active" : ""
              }`}
              id={`category-${category.id}`}
            >
              <NewsList news={news} selectedCategory={selectedCategory} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
