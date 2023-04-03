const fetchRandomPokemon = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    mode: "cors",
  });

  let obj = await data.json();
  return obj;
};

export { fetchRandomPokemon };
