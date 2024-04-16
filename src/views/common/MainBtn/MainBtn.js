import React from "react";
import "./MainBtn.scss";
const MainBtn = ({ onClick, children }) => {
  return (
    <button className="btn mainBtn text-light " onClick={onClick}>
      {children}
    </button>
  );
};

export default MainBtn;
