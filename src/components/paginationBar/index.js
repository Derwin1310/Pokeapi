import React, { useContext } from 'react';
import { pokemonContext } from '/src/components';
import { getActualPage, getTotalPages, getLastPokemons } from '/src/helpers';
import './styles.sass';

export function PaginationBar () {
	const { effects: { setPageNumbers }, pageNumbers, totalOfPokemons } = useContext(pokemonContext)

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
			name: getActualPage(pageNumbers) + ' / ' + getTotalPages(totalOfPokemons),
			style: 'navbar__counter'
		},
		{
			name: 'Next',
			logic: () => setPageNumbers(pageNumbers + 10),
			disabled: pageNumbers >= totalOfPokemons,
		},
		{
			name: 'Last',
			logic: () => setPageNumbers(getLastPokemons(totalOfPokemons)),
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