import React, { useContext } from 'react';
import { pokemonContext } from '/src/hooks';
import pokeball from '/public/assets/pokeball.png';

export function PokemonNotFound() {
	const { effects: { getPokemons } } = useContext(pokemonContext)

	return (
		<section className='error'>
			<div className='error__wrapper'>
				<p className='error__numbers'>4</p>

				<img className='error__img' src={pokeball} alt='pokeball img' />

				<p className='error__numbers'>4</p>
			</div>

			<div>
				<p className='error__warning'>UH-OH!</p>
				<p className='error__desc'>YOU LOOK LOST ON YOUR JOURNEY!</p>
			</div>

			<button onClick={getPokemons} className='error__btn'>Go Back Home</button>
		</section>
	);
}
