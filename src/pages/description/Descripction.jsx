import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Descripction = () => {
  const [recipename, setrecipename] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const fetchdata = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await fetchdata.json();
        console.log(data.data.recipe);
        setrecipename(data.data.recipe);
      } catch {
        console.log(e);
      }
    };
    fetchdata();
  }, [id]);

  //  if recipedata is fetching that is when loading div will display
  if (!recipename) {
    return (
      <div className="text-center max-h-screen w-screen mt-50">
        Loading data please wait ...
      </div>
    );
  }
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipename.image_url}
            className="h-full w-full block group-hover:scale-105 duration-300 "
            alt="recipe_img"
          />
        </div>
      </div>

      {/* data and recipe section */}
      <div className="flex flex-col gap-3">
        <p className="font-bold capitalize">
          publisher :
          <span className="text-xm pl-3 font-medium">
            {recipename.publisher}
          </span>
        </p>
        <h3 className="font-semibold text-xl truncate  text-green-400">
          {recipename.title}
        </h3>

        <button className=" text-lg mt-7 inline-block rounded-lg uppercase font-medium tracking-widder p-3 px-7  hover:shadow-xl bg-black w-3/6    text-white">
          Save as Favorite
        </button>

        {/* another div for recipe incredients */}

        <div>
          <span className="text-xm pl-3 text-black font-bold underline underline-offset-5 ">
            {" "}
            Ingredients :{" "}
          </span>
          <ul className="flex flex-col gap-3">
            {recipename?.ingredients.map((ingre, i) => (
              <li key={i}>
                <span className="text-xm pl-3 font-medium ">
                  {ingre.quantity}
                </span>
                <span className="text-xm pl-3 font-medium">
                  {ingre.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Descripction;
