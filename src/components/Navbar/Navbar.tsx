import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-400 text-white  text-xl h-20">
      <Link to="/">
        <h1 className="p-6">Piplup Dex</h1>
      </Link>
    </div>
  );
};

export default Navbar;
