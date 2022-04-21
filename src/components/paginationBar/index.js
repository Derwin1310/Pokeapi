import React, { useContext } from 'react';
import { pokemonContext } from '/src/components';
import './styles.sass';

export function PaginationBar () {
	const { effects: { setPageNumbers }, pageNumbers, totalOfPokemons } = useContext(pokemonContext)

	const actualPage = Math.ceil(pageNumbers / 10) + 1;
	const totalPages = Math.ceil(totalOfPokemons / 10) + 1;
	const lastPokemons = (parseInt(totalOfPokemons / 10, 10) * 10) + 10;

	const buttons = [
		{
			name: 'First',
			logic: () => setPageNumbers(0),
			disabled: !pageNumbers,
		},
		{
			name: 'Previous',
			logic: () => setPageNumbers(pageNumbers - 10),
			disabled: !pageNumbers,
		},
		{
			name: actualPage + ' / ' + totalPages,
			style: 'navbar__counter'
		},
		{
			name: 'Next',
			logic: () => setPageNumbers(pageNumbers + 10),
			disabled: pageNumbers >= totalOfPokemons,
		},
		{
			name: 'Last',
			logic: () => setPageNumbers(lastPokemons),
			disabled: pageNumbers >= totalOfPokemons,
		},
	];

	return (
		<nav className='navbar'>
			{buttons.map(
				({ name, logic, disabled, style }) => (
					<button
						disabled={disabled}
						onClick={logic}
						key={name}
						className={`navbar__btn ${style}`}
					>
						{name}
					</button>
				),
			)}
		</nav>
	);
};