import React, {useEffect, useState} from 'react';

export function PokemonsList() {
	const [pokemons, setPokemons] = useState();

	const typeSearch = 'pokemon';
	const resultPerPAge = 10;
	const pageNumber = 0;
	const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${resultPerPAge}&offset=${pageNumber}`;

	const getPokemons = async () => {
		const res = await fetch(URL_PAGE);
		const {results} = await res.json();
		setPokemons(results);
	};

	useEffect(() => {
		getPokemons();
	}, []);
	return (
		<ul className='pokelist'>
			{pokemons
				? pokemons.map(item => (
						<li className='pokeitem' key={item.url}>
							{item.name}
						</li>
				  ))
				: 'Loading...'}
		</ul>
	);
}
