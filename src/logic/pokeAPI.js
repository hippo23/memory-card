const fetchRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 501);

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });

  let obj = await data.json();
  return obj;
};

export { fetchRandomPokemon };
