import React from 'react';
import {Spinner} from '/src/components/helpers/spinner';

export function PokemonsList({pokemons}) {

	return (
		<ul className='pokelist'>
			<li className='pokeitem'>
				<span>image</span>
				<span>id</span>
				<span>name</span>
				<span>height</span>
				<span>weight</span>
			</li>

			{
				pokemons 
				? pokemons.map(({sprites: {front_default}, id, name, height, weight}) => {
						
					const pokeHeight = height >= 10 
					? `${height / 10} M` 
					: `${height}0 CM`;

					const pokeWeights =  weight <= 1000
					? `${weight / 10} KG` 
					: `${weight / 10000} TON`;

					return (
						<li className='pokeitem' key={id}>
							<img src={front_default} alt='pokemon img' />
							<span>{id}</span>
							<span>{name}</span>
							<span>{pokeHeight}</span>
							<span>{pokeWeights}</span>
						</li>
					)})
					
				: <Spinner />
			}
		</ul>
	);
}
