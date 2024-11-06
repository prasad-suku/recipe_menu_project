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
          <p className="text-3xl text-center mt-5 text-blue-950">
            {" "}
            Search something to display{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
