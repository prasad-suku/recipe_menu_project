import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col w-80 overflow-hidden p-3 bg-white/70 shadow-md hover:shadow-lg duration-200 gap-3 border-2 rounded-2xl "
    >
      {/* image */}
      <div className="h-40 flex justify-center overflow-hidden items-start rounded-xl ">
        <img src={item?.image_url} alt="recipe_img" className="block w-full" />
      </div>
      {/* recipe title and publisher */}
      <p className="font-bold capitalize">
        publisher :
        <span className="text-xm pl-3 font-medium">{item.publisher}</span>
      </p>
      <h3 className="font-semibold text-xl truncate  text-green-700">
        {item.title}
      </h3>

      <Link
        to={`/description/${item.id}`}
        className=" text-lg  inline-block rounded-lg uppercase font-medium tracking-widder px-5 py-2 hover:shadow-xl bg-black w-3/6    text-white"
      >
        Get Recipe
      </Link>
      <div />
    </div>
  );
};

export default RecipeItem;
