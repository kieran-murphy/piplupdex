import React from 'react'

const PokemonList = ({ pokemon }:object) => {
    return (
      <div>
        {pokemon.map((p: string) => (
          <div key={p}>{p}</div>
        ))}
      </div>
    );
  };

export default PokemonList