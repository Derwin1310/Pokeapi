import React from 'react';
import {PokemonsList} from './PokemonsList';
import './styles.sass';


export const Pokeapi = () => {
	return (
		<main className='section'>
			<header className='header'>
				<h1 className='header__name'>POKEAPI</h1>
				<img
					className='header__pokeball'
					src='https://cdn.discordapp.com/attachments/616187144700166144/962947321891524608/Poke_Ball_icon.svg.png'
					alt='pokeball'
				/>
			</header>

			<form>
				<input
					className='search-bar'
					type='search'
					placeholder='Search your pokemon!'
				/>
				<button className='search-btn'>GO</button>
			</form>

			<PokemonsList />

			<div className='navbar'>
				<button className='navbar__btn'>First</button>
				<button className='navbar__btn'>Previe</button>
				<button className='navbar__btn'>Next</button>
				<button className='navbar__btn'>Last</button>
			</div>
		</main>
	);
};
