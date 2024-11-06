import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Descripction from "./pages/description/Descripction.jsx";
import Favoutite from "./pages/Favourite/Favoutite.jsx";

const App = () => {
  return (
    <>
      <div className="app min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/description/:id"
            element={<Descripction></Descripction>}
          />
          <Route path="/favourite" element={<Favoutite></Favoutite>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
