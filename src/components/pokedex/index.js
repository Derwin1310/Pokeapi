import React from 'react';
import { Navbar } from '../navbar';
import {PokemonsList} from './PokemonsList';
import './styles.sass';

export function Pokeapi () {
	const imgLogo = 'https://cdn.discordapp.com/attachments/616187144700166144/962947321891524608/Poke_Ball_icon.svg.png';

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

			<PokemonsList />

			<Navbar />
		</section>
	);
};
