import React, { useContext } from 'react';
import { pokemonContext } from '/src/components';
import { PokemonInfo } from './PokemonInfo'
import { Spinner } from '/src/helpers';
import { PokemonStats } from './PokemonStats';
import './styles.sass';

export function PokemonsList () {
	const { pokemon } = useContext(pokemonContext);

	if (!pokemon) return <Spinner /> 

	return (
		<ul className='pokelist'>
			<PokemonInfo />
			<PokemonStats />
		</ul>
	);
}
