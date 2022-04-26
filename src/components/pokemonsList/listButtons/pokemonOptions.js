import React, { useContext } from 'react';
import { pokemonContext } from '/src/hooks';
import './styles.sass'

export const PokemonOptions = () => {
	const { effects: { setShowShiny, setShowBack, setShowGender }, showShiny, showBack, showGender } = useContext(pokemonContext);

	const listOptions = [
		{ 
			name: 'Active shinny',
			logic: () => setShowShiny(!showShiny),
			active:	showShiny,
		},
		{
			name: 'Show Back',
			logic: () => setShowBack(!showBack),
			active:	showBack,
		},
		{
			name: 'Show genders',
			logic: () => setShowGender(!showGender),
			active:	showGender,
		},
	];

	return (
		<div className='options'>
			{listOptions.map(({ name, logic, active }) => (
				<button 
					key={name}
					className={`options__btn ${active ? 'options__btn--active' : ''}`} 
					onClick={logic} 
				>
					{name}
				</button>
			))}
		</div>
	); 
};