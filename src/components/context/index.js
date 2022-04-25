import React, { createContext, useState } from 'react';

export const pokemonContext = createContext();

export function ApiContext({ children }) {
	const [notFound, setNotFound] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [pokemon, setPokemon] = useState();
	const [pageNumbers, setPageNumbers] = useState(0);
	const [totalOfPokemons, setTotalOfPokemons] = useState(0);
	const [showShiny, setShowShiny] = useState(false);
	const [showBack, setShowBack] = useState(false);
	const [showGender, setShowGender] = useState(false);

	const getPokemons = async () => {
		setPokemon(false);
		setNotFound(false)

		const typeSearch = 'pokemon';
		const resultPerPAge = 10;
		const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${resultPerPAge}&offset=${pageNumbers}`;

		const res = await fetch(URL_PAGE);
		const rawData = await res.json();

		const rawPokemons = rawData.results;

		const pokemonFullData = await Promise.all(
			rawPokemons.map(async ({ url }) => {
				const resp = await fetch(url);
				return resp.json();
			}),
		);

		setPokemon(pokemonFullData);
		setTotalOfPokemons(rawData.count - 10);
	};

	const searchPokemon = async () => {
		setPokemon(false)
		setNotFound(false)
		
		const query = searchValue.toLowerCase().trim().replaceAll(' ', '-');

		if(!query) return getPokemons();

		const URL_PAGE = `https://pokeapi.co/api/v2/pokemon/${query}/`;

		try {
			const res = await fetch(URL_PAGE);
			const pokemonFinded = await res.json();
			setPokemon([pokemonFinded]);
		} catch {
			setNotFound(true)
		}
	}

	const INITIAL_STATE = {
		notFound,
		searchValue,
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
			searchPokemon,
			setNotFound,
			setSearchValue,
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
