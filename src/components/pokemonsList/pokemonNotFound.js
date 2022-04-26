import React, { useContext } from 'react';
import { pokemonContext } from '/src/hooks';
import pokeball from '/public/assets/pokeball.png';

export function PokemonNotFound() {
	const { effects: { getPokemons } } = useContext(pokemonContext)

	return (
		<section className='not-found'>
			<div className='not-found__wrapper'>
				<p className='not-found__numbers'>4</p>

				<img className='not-found__img' src={pokeball} alt='pokeball img' />

				<p className='not-found__numbers'>4</p>
			</div>

			<div>
				<p className='not-found__warning'>UH-OH!</p>
				<p className='not-found__desc'>YOU LOOK LOST ON YOUR JOURNEY!</p>
			</div>

			<button onClick={getPokemons} className='not-found__btn'>Go Back Home</button>
		</section>
	);
}
