import React, { Fragment, useContext } from 'react';
import { PokemonImgs } from './pokemonImgs';
import { pokemonContext } from '/src/hooks';
import { formatHeight, formatWeight, getPokemonName } from '/src/helpers';

export function PokemonStats() {
	const { pokemon } = useContext(pokemonContext);

	return (
		<Fragment>
			{pokemon.map(item => {
				const { id, name, height, weight, sprites } = item;
				const pokeStats = [
					id,
					getPokemonName(name),
					formatHeight(height),
					formatWeight(weight),
				];

				return (
					<li className='pokeitem' key={id}>
						<PokemonImgs sprites={sprites} />
						{pokeStats.map(item => (
							<span key={item}>{item}</span>
						))}
					</li>
				);
			})}
		</Fragment>
	);
}
