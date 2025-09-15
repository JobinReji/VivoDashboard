import React from "react";
import bgImage from "../assets/Page2.png";
const Menu = () => {
  return (
    <div
      className="full-screen-absolute bg-gray-100 text-black bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center text-white text-7xl">At a Glance</div>
    </div>
  );
};
export default Menu;
