import React from 'react';

export const Pokeapi = () => {
	const URL_PAGE = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';

	fetch(URL_PAGE)
		.then(res => res.json())
		.then(data => console.log('yo soy marico: ', data));

	return (
		<div>
			<h1>Pokeapi</h1>
			<table>
				<tr>
					<th>name</th>
					<th>info</th>
				</tr>
			</table>
			<div className=''>
				<button>First</button>
				<button>Previe</button>
				<button>Next</button>
				<button>Last</button>
			</div>
		</div>
	);
};
