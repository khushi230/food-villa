import React, { useState, useEffect } from "react";
import axios from "axios";

import { restaurantArray } from "../utils/constants";

import Restaurant from "./Restaurant";
import Loader from "./Loader";

const Body = () => {
  const [searchInput, setsearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const filterData = (searchInput) => {
    let filteredArray = restaurants;
    if (searchInput) {
      searchInput = searchInput.toLowerCase();
      filteredArray = restaurants.filter((restaurant) => {
        let flag = 0;
        const restaurantNameLowercased = restaurant.data.name.toLowerCase();

        if (restaurantNameLowercased.includes(searchInput)) flag = 1;

        restaurant.data.cuisines.forEach((cuisine) => {
          const cuisineLowercase = cuisine.toLowerCase();
          if (cuisineLowercase.includes(searchInput)) flag = 1;
        });

        if (flag === 1) return true;
        return false;
      });
    }
    return filteredArray;
  };

  const inputChangeHandler = (e) => {
    setsearchInput(e.target.value);
    const filteredData = filterData(e.target.value);
    setFilterRestaurants(filteredData);
  };

  const fetch = async () => {
    const { data } = await axios.get(
      `/dapi/restaurants/list/v5?lat=28.689214&lng=77.2239895&page_type=DESKTOP_WEB_LISTING`
    );
    let restaurantResponse = data?.data?.cards[2]?.data?.data?.cards;
    if (restaurantResponse) {
      setRestaurants(restaurantResponse);
      setFilterRestaurants(restaurantResponse);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={inputChangeHandler}
        />
      </div>
      {filterRestaurants.length === 0 ? (
        <Loader />
      ) : (
        <div className="body">
          <div className="restaurant-list">
            {filterRestaurants?.map((restaurant) => (
              <Restaurant {...restaurant.data} key={restaurant.data.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
