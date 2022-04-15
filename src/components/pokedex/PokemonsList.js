import React from 'react';

export function PokemonsList({pokemons, pageNumbers, totalOfPokemons}) {
	return (
		<ul className='pokelist'>
			{pokemons
				? pokemons.map(item => (
						<li className='pokeitem' key={item.url}>
							{item.name}
						</li>
				  ))
				: 'Loading...'}
			<span className='counter'>
				<span className='counter__page'>
					{Math.ceil(pageNumbers / 10) + 1}
				</span>

				<span className='counter__divisor' />
				
				<span className='counter__pokemons'>
					{Math.ceil(totalOfPokemons / 10) + 1}
				</span>
			</span>
		</ul>
	);
}
