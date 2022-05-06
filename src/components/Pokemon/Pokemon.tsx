import React, {useEffect, useState} from 'react'
import axios from "axios";

type Props = {
  url: string;
};

const Pokemon: React.FC<Props> = ({url}) => {

  const [loading, setLoading] = useState(true);
  const [thisPokemon, setThisPokemon] = useState("string");
  
  

  useEffect(() => {
    setLoading(true);
    let cancel: any;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        // setNextPageUrl(res.data.next);
        // setPrevPageUrl(res.data.previous);
        setThisPokemon(res.data.sprites.front_default);
        // console.log(thisPokemon);
      });
      
    return () => cancel();
  }, []);

  return (
    <div>
      <img className="w-20" src={thisPokemon} alt="/" />
    </div>
  )
}

export default Pokemon