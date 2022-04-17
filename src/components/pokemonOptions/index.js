import React from 'react';
import './styles.sass'

export const Options = () => {
	const listOptions = [
		{
			name: 'Active shinny',
		},
		{
			name: 'Show Back',
		},
		{
			name: 'Show genders',
		},
	];

	return (
		<div className='options'>
			{listOptions.map(({name}) => (
				<button className='options__btn' key={name}>
					{name}
				</button>
			))}
		</div>
	);
};
