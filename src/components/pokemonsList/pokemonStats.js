import React, { Fragment, useContext } from 'react';
import { PokemonImg } from './pokemonImg';
import { pokemonContext } from '/src/components';
import { formatHeight, formatWeight } from '/src/helpers';

export function PokemonStats() {
	const { pokemon } = useContext(pokemonContext);

	return (
		<Fragment>
			{pokemon.map(item => {
				const { id, name, height, weight, sprites } = item;
				const pokeStats = [
					id,
					name.replaceAll('-', ' '),
					formatHeight(height),
					formatWeight(weight),
				];

				return (
					<li className='pokeitem' key={id}>
						<PokemonImg sprites={sprites} />
						{pokeStats.map(item => (
							<span key={item}>{item}</span>
						))}
					</li>
				);
			})}
		</Fragment>
	);
}
