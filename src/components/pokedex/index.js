import React, { useContext, useEffect } from 'react';
import { PokemonsList, Searcher } from '/src/components';
import { pokemonContext } from '/src/hooks';
import imgLogo from '/public/assets/pokeball.png'
import './styles.sass';

export function Pokeapi() {
	const { pageNumbers, effects:{ getPokemons } } = useContext(pokemonContext);

	useEffect(() => getPokemons(), [pageNumbers]);

	return (
		<section className='section'>
			<header className='header'>
				<img src={imgLogo} alt='pokeball icon' />
				<h1 className='header__name'>Online Pokedex</h1>
			</header>

			<Searcher />
		
			<PokemonsList />
		</section>
	);
}
