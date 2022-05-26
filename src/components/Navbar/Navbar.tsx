import { useState } from "react";
import { Link } from "react-router-dom";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

const Navbar = () => {
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
    console.log(mode);
  };

  return (
    <div className="w-full bg-red-500 text-white text-xl h-20 flex flex-row justify-between">
      <div className="flex flex-row">
        <h1 className="p-6">
          <Link to="/">Piplup Dex</Link>
        </h1>
        <h1 className="p-6">
          <Link to="/gens">Generations</Link>
        </h1>
      </div>

      <div className="place-items-end">
        {mode === "light" ? (
          <RiSunLine
            onClick={handleClick}
            className="text-3xl my-6 cursor-pointer mx-10"
          />
        ) : (
          <RiMoonClearLine
            onClick={handleClick}
            className="text-3xl my-6 cursor-pointer mx-10"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
