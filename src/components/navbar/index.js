import React from 'react';
import './styles.sass';

export const Navbar = () => {
	const btn = ['First', 'Previe', 'Next', 'Last'];

	return (
		<nav className='navbar'>
			{btn.map(key => (
				<button key={key} className='navbar__btn'>
					{key}
				</button>
			))}
		</nav>
	);
};
