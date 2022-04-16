export const getPokemons = async (setPokemon, setTotalOfPokemons, pageNumbers) => {
    const typeSearch = 'pokemon';
	const resultPerPAge = 10;
	const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${resultPerPAge}&offset=${pageNumbers}`;

    setPokemon(false);
    const res = await fetch(URL_PAGE);
    const rawData = await res.json();

    const rawPokemons = rawData.results;

    const pokemonFullData = await Promise.all(
        rawPokemons.map(async pokemon => {
            const resp = await fetch(pokemon.url);
            return resp.json();
        }),
    );

    setPokemon(pokemonFullData);
    setTotalOfPokemons(rawData.count - 10);
};
