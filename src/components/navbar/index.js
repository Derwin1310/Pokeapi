import React from 'react';
import './styles.sass';

export const Navbar = ({pageNumbers, setPageNumbers, totalOfPages}) => {
	const buttons = [
		{
			name: 'First',
			logic: () => setPageNumbers(0),
			disabled: !pageNumbers
		},
		{
			name: 'Previous',
			logic: () => setPageNumbers(pageNumbers - 10),
			disabled: !pageNumbers
		},
		{
			name: 'Next',
			logic: () => setPageNumbers(pageNumbers + 10),
			disabled: pageNumbers === totalOfPages,
		},
		{
			name: 'Last',
			logic: () => setPageNumbers(totalOfPages),
			disabled: pageNumbers === totalOfPages,
		}
	]

	return (
		<nav className='navbar'>
			{buttons.map(({name, logic, disabled}) => (
				<button disabled={disabled} onClick={logic} key={name} className='navbar__btn'>
					{name}
				</button>
			))}
		</nav>
	);
};
