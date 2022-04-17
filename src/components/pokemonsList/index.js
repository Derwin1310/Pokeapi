import React from 'react';
import { PokemonInfo } from '/src/components/';
import { Spinner } from '/src/helpers/spinner';
import { PokemonStats } from './PokemonStats';
import './styles.sass';

export function PokemonsList({pokemons}) {
	return (
		<ul className='pokelist'>
			<PokemonInfo />

			{pokemons ? <PokemonStats pokemons={pokemons} /> : <Spinner />}
		</ul>
	);
}
