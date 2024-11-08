import React, { useContext } from "react";
import { Globalcontext } from "../../context/ContextProvider";
import RecipeItem from "../../components/Recipe-item/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(Globalcontext);

  if (loading === true) return <div>Loading please wait ! until fetch</div>;

  return (
    <>
      <div className="py-8 container flex flex-wrap justify-center gap-10">
        {recipeList.length > 0 ? (
          recipeList.map((item, i) => {
            return <RecipeItem item={item} key={i}></RecipeItem>;
          })
        ) : (
          <div className="h-screen w-screen">
            <p className="text-3xl mb-20 text-center mt-5 text-blue-950">
              {" "}
              Search something for Recipes{" "}
            </p>
            <img
              className="mx-auto m-10 shadow-lg rounded-lg"
              src="https://i.pinimg.com/736x/01/5f/06/015f069e7211425ada88655bd2ef2307.jpg"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
