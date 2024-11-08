import React, { useContext } from "react";
import { Globalcontext } from "../../context/ContextProvider";
import RecipeItem from "../../components/Recipe-item/RecipeItem";

const Favoutite = () => {
  const { favoriteList } = useContext(Globalcontext);
  console.log("fav", favoriteList);

  return (
    <div className="py-8 container flex flex-wrap justify-center gap-10">
      {favoriteList.length > 0 ? (
        favoriteList.map((item, i) => {
          return <RecipeItem item={item} key={i}></RecipeItem>;
        })
      ) : (
        <p className="text-3xl text-center mt-5 text-blue-950">
          {" "}
          Nothing to display in Favorite!{" "}
        </p>
      )}
    </div>
  );
};

export default Favoutite;
