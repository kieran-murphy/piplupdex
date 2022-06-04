import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { StageSpinner } from "react-spinners-kit";
import PokemonList from "../PokemonList/PokemonList";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import Background from "../../Theme/Background";

export default interface PokemonType {
  name: string;
  url: string;
}

export const Content = () => {
  const url = window.location.pathname.split("/").pop();
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
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setOffsetNext(res.data.next.slice(41, 43));
        setPokemon((pokemon) => res.data.results.map((p: PokemonType) => p));
        setLoading(false);
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <body className="bg-white dark:bg-slate-900 transition-all h-auto">
      {loading ? (
        <div className="py-10 flex justify-center">
          <StageSpinner size={60} color="#FF0000" loading={true} />
        </div>
      ) : (
        <>
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            pageNumber={pageNumber}
          />
          <div className="p-12">
            <PokemonList pokemon={pokemon} />
          </div>
        </>
      )}
    </body>
  );
};
