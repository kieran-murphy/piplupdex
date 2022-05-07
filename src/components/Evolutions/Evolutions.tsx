import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

type evo = {
  name: string;
  url: string;
};

type evolutionsType = {
  first: evo;
  second: evo;
  third: evo;
};

type Props = {
  evolutions: evolutionsType;
};

const Evolutions = ({ evolutions }: Props) => {
  return (
    <div>
      <Pokemon url={evolutions.first.url} name={evolutions.first.name} />
      <Pokemon url={evolutions.second.url} name={evolutions.second.name} />
      <Pokemon url={evolutions.third.url} name={evolutions.third.name} />
    </div>
  );
};

export default Evolutions;
