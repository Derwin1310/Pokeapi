import React, { useContext, useEffect } from 'react';
import { PaginationBar, Options, PokemonsList, pokemonContext, Searcher } from '/src/components';
import imgLogo from '/public/assets/pokeball.png'
import './styles.sass';

export function Pokeapi () {
	const { effects:{ getPokemons, setPokemon, setTotalOfPokemons }, pageNumbers } = useContext(pokemonContext);

	useEffect(() => {
		getPokemons(setPokemon, setTotalOfPokemons, pageNumbers)
	}, [pageNumbers]);

	return (
		<section className='section'>
			<header className='header'>
				<img src={imgLogo} alt='pokeball icon' />
				<h1 className='header__name'>Online Pokedex</h1>
			</header>

			<Searcher />

			<Options />

			<PokemonsList />

			<PaginationBar />
		</section>
	);
}
