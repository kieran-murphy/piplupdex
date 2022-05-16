import React from "react";
import PokemonType from "../Content/Content";
import Pokemon from "../Pokemon/Pokemon";

type Props = {
  pokemon: PokemonType[];
};

const PokemonList: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {pokemon.map((p: PokemonType) => (
        <Pokemon key={p.name} url={p.url} name={p.name}></Pokemon>
      ))}
    </div>
  );
};

export default PokemonList;
