import React from 'react';
import {Spinner} from 'src/helpers/spinner';


export function PokemonsList({pokemons, pageNumbers, totalOfPokemons}) {
	const actualPage = Math.ceil(pageNumbers / 10) + 1;
	const totalPages = Math.ceil(totalOfPokemons / 10) + 1;

	return (
		<ul className='pokelist'>
			{pokemons
				? pokemons.map(item => (
						<li className='pokeitem' key={item.url}>
							{item.name}
						</li>
				  ))
				: <Spinner />}
			<span className='counter'>
				<p className='counter__actual-page'>{actualPage}</p>

				<span className='counter__divisor' />

				<p className='counter__total-pages'>{totalPages}</p>
			</span>
		</ul>
	);
}
