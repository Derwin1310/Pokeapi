import React, {Fragment} from 'react';
import image from '/public/assets/pokeball.png';

export const PokemonsMap = ({pokemons}) => {
	return (
		<Fragment>
			{pokemons.map(({sprites: {front_default}, id, name, height, weight}) => {
				const pokeImg = front_default ? front_default : image;

				const pokeHeight = height >= 10 ? `${height / 10} m` : `${height}0 cm`;

				const weightInKgs = weight / 10;
				const weightInTons = weightInKgs / 1000;
				const pokeWeights = weightInKgs < 1000 ? `${weightInKgs} kg` : `${weightInTons} ton`;

				const pokeStats = [id, name, pokeHeight, pokeWeights];

				return (
					<li className='pokeitem' key={id}>
						<figure className='pokeitem__figure'>
							<img className='pokeitem__img' src={pokeImg} alt='pokemon img' />
						</figure>

						{pokeStats.map(item => <span>{item}</span>)}
					</li>
				);
			})}
		</Fragment>
	);
};
