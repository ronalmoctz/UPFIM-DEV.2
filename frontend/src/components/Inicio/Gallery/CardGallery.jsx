import axios from "axios";
import { useEffect, useState } from "react";

const CardGallery = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    await axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

  return (
    <div className="bg-gray-200 p-6 rounded-lg h-[540px] w-[560px] flex flex-col items-center hover:scale-105 transition-transform duration-3000">
      <img
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
        className="w-2/3"
      />
      <div className="mt-4 flex flex-col items-center gap-2">
        <p className="font-bold text-lg capitalize">{pokemon?.name}</p>
        <div className="flex gap-4">
          {pokemon?.types.map(({ type, slot }) => (
            <span
              key={slot}
              className="bg-white py-1 px-3 rounded-lg capitalize"
            >
              {type?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGallery;
