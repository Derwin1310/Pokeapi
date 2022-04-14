import React, {useState, useEffect} from 'react';
import { Navbar } from '../navbar';
import {PokemonsList} from './PokemonsList';
import './styles.sass';

export function Pokeapi () {
	const [pokemon, setPokemon] = useState();
	const [pageNumbers, setPageNumbers] = useState(0);
	const [totalOfPages, setTotalOfPages] = useState(0);

	const imgLogo = 'https://cdn.discordapp.com/attachments/616187144700166144/962947321891524608/Poke_Ball_icon.svg.png';
	const typeSearch = 'pokemon';
	const resultPerPAge = 10;
	const URL_PAGE = `https://pokeapi.co/api/v2/${typeSearch}/?limit=${resultPerPAge}&offset=${pageNumbers}`;
	
	const getPokemons = async () => {
		const res = await fetch(URL_PAGE);
		const rawData = await res.json();
		setPokemon(rawData.results);
		setTotalOfPages(rawData.count - 10)
	};
	
	useEffect(() => {
		getPokemons();
	}, [pageNumbers]);

	return (
		<section className='section'>
			<header className='header'>
				<h1 className='header__name'>POKEAPI</h1>
				<img
					className='header__pokeball'
					src={imgLogo}
					alt='pokeball icon'
				/>
			</header>

			<form className='searcher'>
				<input
					className='searcher__bar'
					type='search'
					placeholder='Search your pokemon!'
				/>
				<button className='searcher__btn'>GO</button>
			</form>

			<PokemonsList totalOfPages={totalOfPages} pokemons={pokemon} pageNumbers={pageNumbers} />

			<Navbar totalOfPages={totalOfPages} pageNumbers={pageNumbers} setPageNumbers={setPageNumbers} />
		</section>
	);
};
