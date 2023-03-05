import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { fullRestaurantData } from "../utils/constants";

const RestaurantMenu = () => {
  const restaurant = fullRestaurantData.data;

  return (
    <div className="menu">
      <div>
        <img alt="img" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.cuisines.join(", ")}</h2>
      </div>
      <div className="menu-item">
        <h1>Menu</h1>
        {Object.values(restaurant.menu.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
