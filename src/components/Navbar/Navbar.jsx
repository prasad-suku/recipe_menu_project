import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globalcontext } from "../../context/ContextProvider";

const Navbar = () => {
  const { search, setSearch, handlesubmit, foodItems } =
    useContext(Globalcontext);

  return (
    <nav className="flex justify-between   items-center py-5 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 w-full px-4 sm:px-6">
      <img src="../../src\assets\icons8-huawei-logo-64.png" alt="" />{" "}
      <form
        onSubmit={handlesubmit}
        className="flex flex-col sm:flex-row gap-3 items-center"
      >
        <input
          type="text"
          value={search}
          list="food-list"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter the recipe"
          className="bg-white/75 p-3 sm:px-10 md:px-20 rounded-full outline-none shadow-lg shadow-blue-100 hover:shadow-blue-200 focus:border text-sm sm:text-base lg:text-lg w-full sm:w-auto"
        />
        <datalist id="food-list">
          {foodItems.map((item, i) => (
            <option key={i} value={item} />
          ))}
        </datalist>
        <button className="bg-slate-500 px-6 py-2 hover:bg-slate-800 duration-200 rounded-xl text-white w-full sm:w-auto">
          Search
        </button>
      </form>
      <ul className="flex gap-4 text-sm sm:text-base md:text-lg font-semibold">
        <li>
          <Link to="/" className="text-black duration-300 hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/favourite"
            className="text-black duration-300 hover:text-gray-500"
          >
            Favourite
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
