import React from "react";

import { IMG_CDN_URL } from "../utils/constants";

const Restaurant = ({ name, cuisines, cloudinaryImageId, avgRating }) => (
  <div className="card">
    <img src={IMG_CDN_URL + cloudinaryImageId} />
    <div className="card-content">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {avgRating == "--" ? (
        <h4>No ratings available</h4>
      ) : (
        <h4>{avgRating}/5</h4>
      )}
    </div>
  </div>
);

export default Restaurant;
