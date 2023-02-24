// pages/Pokemon.jsx
import { useState } from "react";
import axios from "axios";

export const Pokemon = () => {
  //stateをつくる
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  const getPokemons = async (keyword) => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const result = await axios.get(`${url}${keyword}`);
    setPokemons(result.data ?? []);
  };
  // const selectPokemon = (setpokemons) => {
  //   setPokemon(pokemons.name);
  // };
  // const showAll = async () => {
  //   for (let i = 1; i <= 2; i++) {
  //     await getPokemons(i);
  //   }
  // };
  // showAll();

  return (
    <>
      <p>キーワードで検索する</p>
      <input type="text" onChange={(e) => getPokemons(e.target.value)} />
      <p>{pokemons.name}</p>
    </>
  );
};
