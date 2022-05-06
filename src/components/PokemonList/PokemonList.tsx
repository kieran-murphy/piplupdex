import React from "react";
import PokemonType from "../Content/Content";
import Pokemon from "../Pokemon/Pokemon";

type Props = {
  pokemon: PokemonType[];
};

const PokemonList: React.FC<Props> = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p: PokemonType) => (
        <Pokemon key={p.name} url={p.url}></Pokemon>
      ))}
    </div>
  );
};

export default PokemonList;
