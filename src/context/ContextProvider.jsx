import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Globalcontext = createContext();
const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  // const [favoriteList, setFavouritelist] = useState([]);
  const [favoriteList, setFavouritelist] = useState([]);

  const navigate = useNavigate();
  // recipe name array list
  const foodItems = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
  ];

  // handlesearch function to fetch recipe data from api

  const handlesubmit = async (e) => {
    e.preventDefault();
    // to navigate home page
    navigate("/");
    // alert(search);
    try {
      // setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      // console.log(data.data.recipes);
      if (data) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearch("");
      }
    } catch {
      console.log(e);
      setLoading(false);
      setSearch("");
    }
  };

  // handlesavetoFavorite function

  const handleFavouriteitem = (curRecipe) => {
    // alert(curRecipe.publisher);

    let cpyFavouriteList = [...favoriteList];
    const index = cpyFavouriteList.findIndex(
      (item) => item.id === curRecipe.id
    );

    if (index === -1) {
      cpyFavouriteList.push(curRecipe);
    } else {
      cpyFavouriteList.splice(index);
    }
    setFavouritelist(cpyFavouriteList);
    // console.log(index);

    // setFavouritelist(curRecipe);
    // console.log("current re", curRecipe);
  };
  // console.log(favoriteList);

  return (
    <Globalcontext.Provider
      value={{
        search,
        foodItems,
        recipeList,
        loading,
        setSearch,
        handlesubmit,
        handleFavouriteitem,
        favoriteList,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};

export default ContextProvider;
