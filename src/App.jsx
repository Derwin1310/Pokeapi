import React from 'react';
import { Pokeapi } from './components';
import { ApiContext } from '/src/hooks';
import './styles.sass';

export function App () {

	return (
		<ApiContext>
			<Pokeapi />
		</ApiContext>
	);
};
