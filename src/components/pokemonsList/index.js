import React, { Fragment, useContext } from 'react';
import { pokemonContext } from '/src/context';
import { PokemonInfo } from './pokemonInfo';
import { Spinner } from '/src/helpers';
import { PokemonStats } from './pokemonStats';
import { NotFound } from './notFound';
import { PaginationBtns, PokemonOptions } from './listButtons';
import './styles.sass';

export function PokemonsList() {
	const { pokemon, notFound } = useContext(pokemonContext);

	if (notFound) return <NotFound />;
	if (!pokemon) return <Spinner />;

	return (
		<Fragment>
			<PokemonOptions />
			<ul className='pokelist'>
				<PokemonInfo />
				<PokemonStats />
			</ul>
			<PaginationBtns />
		</Fragment>
	);
}
