import React, {useState, useEffect} from 'react';
import {Navbar} from '../navbar';
import { Options } from './Options';
import {PokemonsList} from './PokemonsList';
import './styles.sass';

export function Pokeapi() {
	const [pokemon, setPokemon] = useState();
	const [pageNumbers, setPageNumbers] = useState(0);
	const [totalOfPokemons, setTotalOfPokemons] = useState(0);

	const imgLogo =
		'https://cdn.discordapp.com/attachments/616187144700166144/962947321891524608/Poke_Ball_icon.svg.png';

	const typeSearch = 'pokemon';
	const resultPerPAge = 10;
	const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${resultPerPAge}&offset=${pageNumbers}`;

	const getPokemons = async () => {
		setPokemon(false);
		const res = await fetch(URL_PAGE);
		const rawData = await res.json();

		const rawPokemons = rawData.results;

		const pokemonFullData = await Promise.all(
			rawPokemons.map(async pokemon => {
				const resp = await fetch(pokemon.url);
				return resp.json();
			}),
		);

		setPokemon(pokemonFullData);
        console.log("🚀 ~ file: index.js ~ line 34 ~ getPokemons ~ pokemonFullData", pokemonFullData)
		setTotalOfPokemons(rawData.count - 10);
	};

	useEffect(() => {
		getPokemons();
	}, [pageNumbers]);

	return (
		<section className='section'>
			<header className='header'>
				<h1 className='header__name'>Online Pokedex</h1>
				<img className='header__pokeball' src={imgLogo} alt='pokeball icon' />
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
