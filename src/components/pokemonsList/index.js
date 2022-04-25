import React, { Fragment, useContext } from 'react';
import { PokemonInfo } from './pokemonInfo';
import { Spinner } from '/src/helpers';
import { PokemonStats } from './pokemonStats';
import { PokemonNotFound } from './pokemonNotFound';
import { PaginationBar, Options, pokemonContext } from '/src/components';
import './styles.sass';

export function PokemonsList() {
	const { pokemon, notFound } = useContext(pokemonContext);

	if (notFound) return <PokemonNotFound />;
	if (!pokemon) return <Spinner />;

	return (
		<Fragment>
			<Options />
			<ul className='pokelist'>
				<PokemonInfo />
				<PokemonStats />
			</ul>
			<PaginationBar />
		</Fragment>
	);
}
