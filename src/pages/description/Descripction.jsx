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
  }, []);
  return (
    <div className="h-screen mt-5 flex gap-10 bg-green-400">
      <div>{/* <img alt="" /> */}</div>
    </div>
  );
};

export default Descripction;
