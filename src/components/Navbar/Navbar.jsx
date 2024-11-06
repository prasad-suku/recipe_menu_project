import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-100 items-center py-5  container mx-auto flex-col lg:flex-row gap-5 lg:gap-0  ">
      <h2 className="text-2xl font-semibold">Recipefinder</h2>

      <input
        type="text"
        placeholder="Enter the recipe"
        className="bg-white/75 p-3 px-20 rounded-full outline-none lg:w-90 shadow-lg shadow-blue-100 hover:shadow-blue-200 focus:border"
      />
      <ul className="flex gap-4">
        <li>
          <Link
            to="/"
            className="text-black duration-300 font-semibold hover:font-normal font-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/favourite"
            className="text-black duration-300 font-semibold hover:font-normal font-xl"
          >
            Favourite
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
