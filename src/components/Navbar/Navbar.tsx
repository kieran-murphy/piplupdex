import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-400 text-white text-xl h-20 flex flex-row">
      <h1 className="p-6">
        <Link to="/">Piplup Dex</Link>
      </h1>
      <h1 className="p-6">
        <Link to="/gens">Generations</Link>
      </h1>
    </div>
  );
};

export default Navbar;
