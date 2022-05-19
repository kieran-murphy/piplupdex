import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import axios from "axios";
import getTypeColor from "../../scripts/getTypeColor";
import getGen from "../../scripts/getGen";
import { Link } from "react-router-dom";

type Props = {
  url: string;
  name: string;
};

const Pokemon: React.FC<Props> = ({ url, name }) => {
  const [loading, setLoading] = useState(true);
  const [thisPokemon, setThisPokemon] = useState({
    name: "string",
    type: "string",
    image: "string",
    id: "id",
    gen: "gen",
  });

  const textStyle = {};

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
          name: name,
          type: res.data.types[0].type.name,
          image: res.data.sprites.front_default,
          id: res.data.id,
          gen: getGen(res.data.id),
        });
      });

    return () => cancel();
  }, []);

  return (
    <Link to={`/pokemon/${name}`}>
      <div className="w-60 outline outline-offset-2 outline-1 rounded-sm m-8">
        <div
          className={`${getTypeColor(
            thisPokemon.type
          )} w-60 flex justify-center`}
        >
          <img
            className="w-40"
            src={thisPokemon.image}
            alt={thisPokemon.image}
          />
        </div>

        <h2 className="text-center font-medium capitalize text-xl">
          {name} - #{thisPokemon.id} - gen {thisPokemon.gen}
        </h2>
        <div className="flex flex-row space-x-4 justify-center">
          <div
            className={`${getTypeColor(
              thisPokemon.type
            )} w-20 text-center my-2 outline outline-offset-2 outline-1 rounded-xl`}
          >
            <p className="font-sm uppercase text-white">{thisPokemon.type}</p>
          </div>
          <div
            className={`${getTypeColor(
              thisPokemon.type
            )} w-20 text-center my-2 outline outline-offset-2 outline-1 rounded-xl`}
          >
            <p className="font-sm uppercase text-white">{thisPokemon.type}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
