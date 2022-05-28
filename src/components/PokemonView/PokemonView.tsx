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
    type: "string",
    secondType: "string",
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
          secondType:
            res.data.types.length > 1 ? res.data.types[1].type.name : null,
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
    <div className="flex justify-center ">
      {loading ? (
        <div className="py-10">
          <StageSpinner size={60} color="#FF0000" loading={true} />
        </div>
      ) : (
        <div className="w-2/3 m-20 flex flex-row bg-slate-100 rounded-xl">
          <div
            className={`${getTypeColor(
              thisPokemon.type
            )} flex flex-col relative w-1/3 justify-between rounded-l-xl`}
          >
            <h1 className="px-4 text-2xl font-semibold text-black text-opacity-50 tracking-xl top-1/8 pointer-events-none">
              #{thisPokemon.id}
            </h1>
            <img className="w-full p-10" src={thisPokemon.image} alt="/" />

            <div className="bg-white w-full bg-white/25 h-20">
              <div className="flex flex-row space-x-4 justify-center pt-5">
                <div
                  className={`${getTypeColor(
                    thisPokemon.type
                  )} w-20 text-center my-2 outline outline-2 rounded-xl`}
                >
                  <p id="typetext" className="text-white">
                    {thisPokemon.type}
                  </p>
                </div>
                {thisPokemon.secondType && (
                  <div
                    className={`${getTypeColor(
                      thisPokemon.secondType
                    )} w-20 text-center my-2 outline outline-2 rounded-xl`}
                  >
                    <p id="typetext" className="text-white">
                      {thisPokemon.secondType}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="m-8">
            <h1 className="capitalize text-3xl mb-10 font-medium">{name}</h1>
            {/* <Evolutions evolutions={evolutions} /> */}
            <h2 className="font-medium text-lg">About:</h2>
            <h2 className="text-lg pb-4">{flavor.replace("", " ")}</h2>
            <h2 className="font-medium text-lg">Species: </h2>
            <h2 className="text-lg pb-4">{species}</h2>
            <h2 className="font-medium text-lg">Height: </h2>
            <h2 className="text-lg pb-4">{thisPokemon.height}m</h2>
            <h2 className="font-medium text-lg">Weight: </h2>
            <h2 className="text-lg pb-4">{thisPokemon.weight}kg</h2>
            <h2 className="font-medium text-lg capitalize">Habitat:</h2>
            <h2 className="text-lg capitalize pb-8">
              {habitat ? habitat.replace("-", " ") : "No Known Habitat"}
            </h2>
            {gender > 0 ? (
              <h2 className="text-xl">♂ {((8 - gender) / 8) * 100}%</h2>
            ) : (
              <h2 className="text-xl font-medium">Genderless</h2>
            )}
            {gender > 0 && <h2 className="text-xl">♀ {(gender / 8) * 100}%</h2>}
            {legendary && <h2>Legendary</h2>}
            {mythical && <h2>Mythical</h2>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonView;
