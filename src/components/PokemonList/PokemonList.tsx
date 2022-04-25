import React from 'react'
import PokemonType from '../Content/Content'
// interface PokemonType {
//   name: string;
//   url: string;
// }

const PokemonList = ({ pokemon }: any) => {
    return (
      <div>
        {pokemon.map((p: PokemonType) => (
          <div className='py-1 capitalize' key={p.url}>{p.name}</div>
        ))}
      </div>
    );
  };

export default PokemonList