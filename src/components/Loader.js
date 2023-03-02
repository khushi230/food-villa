import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      {Array(15)
        .fill("")
        .map((restaurant, index) => {
          return (
            <div key={index} className="loader-cards">
              <div className="loader-img"></div>
              <div className="loader-content-1"></div>
              <div className="loader-content-2"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Loader;
