import React from "react";
import "./MainBtn.scss";
const MainBtn = ({ onClick, children }) => {
  return (
    <button className="btn mainBtn text-light px-4 py-3" onClick={onClick}>
      {children}
    </button>
  );
};

export default MainBtn;
