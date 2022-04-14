import React from 'react';

export function PokemonsList({pokemons, pageNumbers, totalOfPages}) {
	return (
		<ul className='pokelist'>
			{pokemons
				? pokemons.map(item => (
						<li className='pokeitem' key={item.url}>
							{item.name}
						</li>
				  ))
				: 'Loading...'}
			<span>{`${Math.ceil(pageNumbers / 10) + 1} of ${Math.ceil(totalOfPages / 10) + 1}`}</span>
		</ul>
	);
}
