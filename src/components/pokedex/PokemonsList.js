import React, {useEffect, useState} from 'react';

export const PokemonsList = () => {
	const [items, setItems] = useState();

	const typeSearch = 'pokemon';
	const pageLimit = 10;
	const offsetNumber = 0;
	const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${pageLimit}&offset=${offsetNumber}`;

	const getPokemons = async () => {
		const res = await fetch(URL_PAGE);
		const {results} = await res.json();
		setItems(results);
	};

	useEffect(() => {
		getPokemons();
	}, []);
	return (
		<ul className='pokelist'>
			{
                !items
                ? 'Loading...'
                : items.map(item => (
                        <li className='pokeitem' key={item.url}>
                            {item.name}
                        </li>
                    )
                )}
		</ul>
	);
};