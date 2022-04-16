import React from 'react';
import {Info} from '/src/components/info';
import {Spinner} from '/src/components/helpers/spinner';
import {PokemonsMap} from './PokemonsMap';
import './styles.sass';

export function PokemonsList({pokemons}) {
	return (
		<ul className='pokelist'>
			<Info />

			{pokemons ? <PokemonsMap pokemons={pokemons} /> : <Spinner />}
		</ul>
	);
}
