import React from 'react';
import './styles.sass';

export const Navbar = ({pageNumbers, setPageNumbers, totalOfPokemons}) => {
	const actualPage = Math.ceil(pageNumbers / 10) + 1;
	const totalPages = Math.ceil(totalOfPokemons / 10) + 1;

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
			name: '',
			actualPage: actualPage,
			divisor: '/',
			totalPages: totalPages,
		},
		{
			name: 'Next',
			logic: () => setPageNumbers(pageNumbers + 10),
			disabled: pageNumbers === totalOfPokemons,
		},
		{
			name: 'Last',
			logic: () => setPageNumbers(totalOfPokemons),
			disabled: pageNumbers === totalOfPokemons,
		},
	];

	return (
		<nav className='navbar'>
			{buttons.map(
				({name, logic, disabled, actualPage, divisor, totalPages}) => (
					<button
						disabled={disabled}
						onClick={logic}
						key={name}
						className='navbar__btn'
					>
						{actualPage}
						{divisor}
						{totalPages}
						{name}
					</button>
				),
			)}
		</nav>
	);
};
