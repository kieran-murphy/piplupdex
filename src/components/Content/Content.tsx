import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonList from "../PokemonList/PokemonList";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

export default interface PokemonType {
  name: string;
  url: string;
}

export const Content = () => {
  const { pageNumber } = useParams();
  const [pokemon, setPokemon] = useState([{ name: "bulbasaur", url: "url" }]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    pageNumber
      ? `https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}&limit=20`
      : "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [offsetNext, setOffsetNext] = useState(0);

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
        setOffsetNext(res.data.next.slice(41, 43));
        setPokemon((pokemon) => res.data.results.map((p: PokemonType) => p));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
    console.log("next");
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      <div className="p-12">
        <PokemonList pokemon={pokemon} />
      </div>
    </>
  );
};
