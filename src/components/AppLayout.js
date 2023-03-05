import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Body from "./Body";
import Contact from "./Contact";
import Footer from "./Footer";
import Cart from "./Cart";
import Error from "./Error";
import App from "../App";
import RestaurantMenu from "./RestaurantMenu";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);

export default AppLayout;
