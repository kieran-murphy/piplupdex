import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../../Theme/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  // const handleClick = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  //   console.log(mode);
  // };

  return (
    <div className="w-full bg-red-500 text-white text-xl h-20 flex flex-row justify-between dark:text-slate-900 dark:bg-red-600">
      <div className="flex flex-row">
        <h1 className="p-5">
          <Link to="/">
            <Icon icon="mdi:pokeball" width="40" height="40" />
          </Link>
        </h1>
        {/* <h1 className="p-6">
          <Link to="/gens">Generations</Link>
        </h1> */}
      </div>

      <div className="place-items-end">
        {theme === "light" ? (
          <RiSunLine
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-3xl my-6 cursor-pointer mx-10"
          />
        ) : (
          <RiMoonClearLine
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-3xl my-6 cursor-pointer mx-10"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
