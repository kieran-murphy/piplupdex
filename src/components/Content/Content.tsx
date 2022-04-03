import { useState, useEffect } from "react";
import PokemonList from '../PokemonList/PokemonList'
import axios from "axios";

const Content = () => {
    const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
      "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let cancel: any;
        axios
          .get(currentPageUrl, {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          })
          .then((res) => {
            setLoading(false);
            setNextPageUrl(res.data.next);
            setPrevPageUrl(res.data.previous);
            setPokemon(res.data.results.map((p: object) => p.name));
          });
    
        return () => cancel();
      }, [currentPageUrl]);
  
    return (
    <div>
        <PokemonList pokemon={pokemon} />
    </div>
  )
}

export default Content