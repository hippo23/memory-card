const fetchRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 500) + 1;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });

  let obj = await data.json();
  return obj;
};

const containsObject = (obj, list) => {
  var x;
  for (x in list) {
    if (list.hasOwnProperty(x) && list[x] === obj) {
      return true;
    }
  }

  return false;
};

export { fetchRandomPokemon, containsObject };
