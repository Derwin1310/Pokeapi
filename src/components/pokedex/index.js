import React, { useState, useEffect } from 'react';
import { Navbar, Options, PokemonsList } from '/src/components/';
import imgLogo from '/public/assets/pokeball.png'
import { getPokemons } from '/src/helpers/getPokemons';
import './styles.sass';

export function Pokeapi() {
	const [pokemon, setPokemon] = useState();
	const [pageNumbers, setPageNumbers] = useState(0);
	const [totalOfPokemons, setTotalOfPokemons] = useState(0);

	useEffect(() => {
		getPokemons(setPokemon, setTotalOfPokemons, pageNumbers)
	}, [pageNumbers]);

	return (
		<section className='section'>
			<header className='header'>
				<img src={imgLogo} alt='pokeball icon' />
				<h1 className='header__name'>Online Pokedex</h1>
			</header>

			<form className='searcher'>
				<input
					className='searcher__bar'
					type='search'
					placeholder='Search your pokemon!'
				/>
				<button className='searcher__btn'>GO</button>
			</form>

			<Options />

			<PokemonsList
				totalOfPokemons={totalOfPokemons}
				pokemons={pokemon}
				pageNumbers={pageNumbers}
			/>

			<Navbar
				totalOfPokemons={totalOfPokemons}
				pageNumbers={pageNumbers}
				setPageNumbers={setPageNumbers}
			/>
		</section>
	);
}
