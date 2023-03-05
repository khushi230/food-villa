import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { IMG_CDN_URL } from "../utils/constants";
import { fullRestaurantData } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(fullRestaurantData);

  console.log(restaurant.menu);

  return (
    <div>
      <div>
        <h2>id:{useParams().id}</h2>

        <img alt="img" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.cuisines}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default RestaurantMenu;
