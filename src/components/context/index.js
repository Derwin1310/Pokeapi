import React, { createContext, useState } from 'react';

export const pokemonContext = createContext();

export function ApiContext({ children }) {
	const [pokemon, setPokemon] = useState();
	const [pageNumbers, setPageNumbers] = useState(0);
	const [totalOfPokemons, setTotalOfPokemons] = useState(0);
	const [showShiny, setShowShiny] = useState(false);
	const [showBack, setShowBack] = useState(false);
	const [showGender, setShowGender] = useState(false);

	const getPokemons = async () => {
		const typeSearch = 'pokemon';
		const resultPerPAge = 10;
		const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${resultPerPAge}&offset=${pageNumbers}`;

		setPokemon(false);
		const res = await fetch(URL_PAGE);
		const rawData = await res.json();

		const rawPokemons = rawData.results;

		const pokemonFullData = await Promise.all(
			rawPokemons.map(async ({ url }) => {
				const resp = await fetch(url);
				return resp.json();
			}),
		);
        // console.log("🚀 ~ file: index.js ~ line 29 ~ getPokemons ~ pokemonFullData", pokemonFullData)

		setPokemon(pokemonFullData);
		setTotalOfPokemons(rawData.count - 10);
	};

	const INITIAL_STATE = {
		pokemon,
		pageNumbers,
		totalOfPokemons,
		showShiny,
		showBack,
		showGender,
	};

	const setState = () => {
		return {
			getPokemons,
			setPokemon,
			setPageNumbers,
			setTotalOfPokemons,
			setShowShiny,
			setShowBack,
			setShowGender,
		};
	};

	const state = {
		...INITIAL_STATE,
		effects: {
			...setState(),
		},
	};

	return (
		<pokemonContext.Provider value={state}>{children}</pokemonContext.Provider>
	);
}
