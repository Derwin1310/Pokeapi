import React from 'react';
import { Pokeapi } from './components';
import { ApiContext } from '/src/context';
import './styles.sass';

export function App () {

	return (
		<ApiContext>
			<Pokeapi />
		</ApiContext>
	);
};
