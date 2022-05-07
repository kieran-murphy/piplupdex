import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getTypeColor from "../../scripts/getTypeColor";
import Evolutions from "../Evolutions/Evolutions";

type Props = {};

const PokemonView = (props: Props) => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [loading, setLoading] = useState(true);
  const [evolutionChain, setEvolutionChain] = useState("");
  const [evolutions, setEvolutions] = useState({
    first: { name: "", url: "" },
    second: { name: "", url: "" },
    third: { name: "", url: "" },
  });
  const [thisPokemon, setThisPokemon] = useState({
    type: "",
    image: "",
    speciesUrl: "",
  });

  useEffect(() => {
    setLoading(true);
    let cancel: any;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setThisPokemon({
          type: res.data.types[0].type.name,
          image: res.data.sprites.front_default,
          speciesUrl: res.data.species.url,
        });
      });

    return () => cancel();
  }, []);

  useEffect(() => {
    setLoading(true);
    let cancel: any;
    axios
      .get(thisPokemon.speciesUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setEvolutionChain(res.data.evolution_chain.url);
      });
  }, [thisPokemon]);

  useEffect(() => {
    setLoading(true);
    let cancel: any;
    axios
      .get(evolutionChain, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setEvolutions({
          first: {
            name: res.data.chain.species.name,
            url: res.data.chain.species.url,
          },
          second: {
            name: res.data.chain.evolves_to[0].species.name,
            url: res.data.chain.evolves_to[0].species.url,
          },
          third: {
            name: res.data.chain.evolves_to[0].evolves_to[0].species.name,
            url: res.data.chain.evolves_to[0].evolves_to[0].species.url,
          },
        });
      });
  }, [evolutionChain]);

  return (
    <div className="flex justify-center">
      <div className="w-1/2 h-96 outline outline-offset-2 outline-1 rounded-sm m-8">
        <div
          className={`${getTypeColor(thisPokemon.type)} flex justify-center`}
        >
          <img className="w-40" src={thisPokemon.image} alt="/" />
        </div>
        <h1 className="text-center font-medium capitalize text-2xl">{name}</h1>
        <Evolutions evolutions={evolutions} />
      </div>
    </div>
  );
};

export default PokemonView;
