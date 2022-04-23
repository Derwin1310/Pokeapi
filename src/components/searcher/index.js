import React from 'react';
import './styles.sass'

export const Searcher = () => {
	return (
		<form className='searcher'>
			<input
				className='searcher__bar'
				type='search'
				placeholder='Search your pokemon!'
			/>
			<button className='searcher__btn'>GO</button>
		</form>
	);
};
