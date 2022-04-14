import React from 'react';
import './styles.sass';

export const Navbar = () => {
	const buttons = ['First', 'Previe', 'Next', 'Last'];

	return (
		<nav className='navbar'>
			{buttons.map(btn => (
				<button key={btn} className='navbar__btn'>
					{btn}
				</button>
			))}
		</nav>
	);
};
