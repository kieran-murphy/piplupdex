import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getTypeColor from "../../scripts/getTypeColor";
import getImageURL from "../../scripts/getImageURL";
import Evolutions from "../Evolutions/Evolutions";
import { StageSpinner } from "react-spinners-kit";

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
    height: "",
    weight: "",
    id: 0,
  });
  const [gender, setGender] = useState(0);
  const [flavor, setFlavor] = useState("");
  const [species, setSpecies] = useState("");
  const [habitat, setHabitat] = useState("");
  const [legendary, setLegendary] = useState(false);
  const [mythical, setMythical] = useState(false);

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
          image: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getImageURL(
            res.data.species.url.split("/")[6]
          )}.png`,
          speciesUrl: res.data.species.url,
          height: (res.data.height / 10).toString(),
          weight: (res.data.weight / 10).toString(),
          id: res.data.id,
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
        setGender(res.data.gender_rate);
        setFlavor(res.data.flavor_text_entries[0].flavor_text);
        setSpecies(res.data.genera[7].genus);
        setLegendary(res.data.is_legendary);
        setMythical(res.data.is_mythical);
        setHabitat(res.data.habitat.name);
      });
  }, [thisPokemon]);

  // useEffect(() => {
  //   setLoading(true);
  //   let cancel: any;
  //   axios
  //     .get(evolutionChain, {
  //       cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //     })
  //     .then((res) => {
  //       setLoading(false);
  //       setEvolutions({
  //         first: {
  //           name: res.data.chain.species.name,
  //           url: res.data.chain.species.url,
  //         },
  //         second: {
  //           name: res.data.chain.evolves_to[0].species.name,
  //           url: res.data.chain.evolves_to[0].species.url,
  //         },
  //         third: {
  //           name: res.data.chain.evolves_to[0].evolves_to[0].species.name,
  //           url: res.data.chain.evolves_to[0].evolves_to[0].species.url,
  //         },
  //       });
  //     });
  // }, [evolutionChain]);

  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="py-10">
          <StageSpinner size={60} color="#FF0000" loading={true} />
        </div>
      ) : (
        <div className="w-2/3 outline outline-offset-2 outline-1 rounded-sm m-8 place-items-center">
          <div
            className={`${getTypeColor(
              thisPokemon.type
            )} mx-auto w-full flex flex-col items-center justify-center relative`}
          >
            <h1 className="text-8xl font-semibold text-black text-opacity-25 absolute tracking-xl top-1/8 pointer-events-none">
              #{thisPokemon.id}
            </h1>
            <img className="w-80 p-6 " src={thisPokemon.image} alt="/" />
          </div>
          <h1 className="text-center font-medium capitalize text-3xl my-4">
            {name}
          </h1>
          {/* <Evolutions evolutions={evolutions} /> */}
          <h2 className="text-center font-medium text-lg">
            About: {flavor.replace("", "")}
          </h2>
          <h2 className="text-center font-medium text-lg">
            Species: {species}
          </h2>
          <h2 className="text-center font-medium text-lg">
            Height: {thisPokemon.height}m
          </h2>
          <h2 className="text-center font-medium text-lg">
            Weight: {thisPokemon.weight}kg
          </h2>
          <h2 className="text-center font-medium text-lg capitalize">
            Habitat: {habitat ? habitat.replace("-", " ") : "No Known Habitat"}
          </h2>
          {gender > 0 ? (
            <h2 className="text-center font-medium text-lg">
              Male: {((8 - gender) / 8) * 100}%
            </h2>
          ) : (
            <h2 className="text-center font-medium text-lg">Genderless</h2>
          )}
          {gender > 0 && (
            <h2 className="text-center font-medium text-lg">
              Female: {(gender / 8) * 100}%
            </h2>
          )}
          {legendary && <h2>Legendary</h2>}
          {mythical && <h2>Mythical</h2>}
        </div>
      )}
    </div>
  );
};

export default PokemonView;
