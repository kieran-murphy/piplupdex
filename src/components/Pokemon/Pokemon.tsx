import React, { useEffect, useState } from "react";
import axios from "axios";
import getTypeColor from "../../scripts/getTypeColor";
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
          name: name,
          type: res.data.types[0].type.name,
          image: res.data.sprites.front_default,
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
          <img className="w-40" src={thisPokemon.image} alt="/" />
        </div>
        <h2 className="text-center font-medium capitalize">
          {name} - {thisPokemon.type} type
        </h2>
      </div>
    </Link>
  );
};

export default Pokemon;
