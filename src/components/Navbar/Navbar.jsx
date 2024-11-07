import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globalcontext } from "../../context/ContextProvider";

const Navbar = () => {
  const { search, setSearch, handlesubmit, foodItems } =
    useContext(Globalcontext);

  return (
    <nav className="flex justify-between w-100 items-center py-5  container mx-auto flex-col lg:flex-row gap-5 lg:gap-0  ">
      <h2 className="text-4xl text-green-500 font-semibold">Recipefinder</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={search}
          list="food-list"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter the recipe"
          className="bg-white/75 p-3 px-20 rounded-full outline-none lg:w-90 shadow-lg shadow-blue-100 hover:shadow-blue-200 focus:border"
        />
        <datalist id="food-list">
          {foodItems.map((item, i) => (
            <option key={i} value={item} />
          ))}
        </datalist>
        <button className="bg-slate-500 ml-5 px-6 py-2 hover:bg-slate-800 duration-200 rounded-xl text-white">
          Search
        </button>
      </form>
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
