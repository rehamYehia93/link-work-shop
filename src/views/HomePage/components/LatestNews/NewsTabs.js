import React, { useState } from "react";

const NewsTabs = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category); // Pass selected category to parent component
  };

  return (
    <div>
      <ul className="nav justify-content-center nav-pills gap-3" role="tablist">
        <li className="nav-item" key="all">
          <button
            className={`nav-link ${selectedCategory === null ? "active" : ""}`}
            onClick={() => handleCategoryClick(null)} // Clicking on 'All' category
          >
            All News
          </button>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <button
              className={`nav-link ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsTabs;
