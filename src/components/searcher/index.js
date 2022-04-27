import React, { useContext } from 'react';
import { pokemonContext } from '/src/context';
import './styles.sass';

export function Searcher() {
	const {
		effects: { setSearchValue, searchPokemon },
	} = useContext(pokemonContext);

	const handlerInputValue = e => setSearchValue(e.target.value);

	const handlerSubmit = e => {
		e.preventDefault();
		searchPokemon();
	};

	return (
		<form onSubmit={handlerSubmit} className='searcher'>
			<input
				onChange={handlerInputValue}
				className='searcher__bar'
				type='search'
				placeholder='Search your pokemon!'
			/>
			<button type='submit' className='searcher__btn'>
				GO!
			</button>
		</form>
	);
}
