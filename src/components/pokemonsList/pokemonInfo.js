import React from 'react';
import './styles.sass';

export function PokemonInfo() {
	const pokeInfo = ['image', 'id', 'name', 'height', 'weight'];

	return (
		<li className='pokeinfo'>
			{pokeInfo.map(info => <span key={info}>{info}</span>)}
		</li>
	);
};
