import React, { useContext } from 'react';
import { pokemonContext } from '/src/context';
import pokeball from '/public/assets/pokeball.png';

export function PokemonImgs({ sprites }) {
	const { showBack, showShiny, showGender } = useContext(pokemonContext);

	const {
		front_default,
		front_shiny,
		back_default,
		back_shiny,
		front_female,
		back_female,
		front_shiny_female,
		back_shiny_female,
	} = sprites;

	const validation = () => { 
        //Female sprites
		if (showGender && front_female) {
            if (showShiny) return showBack ? back_shiny_female : front_shiny_female;
            return showBack ? back_female : front_female;
		}

        //Male sprites 
        if (showShiny) return showBack ? back_shiny : front_shiny;
        return showBack ? back_default : front_default;
	};

	return (
		<figure className='pokeitem__figure'>
			<img
				className='pokeitem__img'
				src={validation() || pokeball}
				alt='pokemon img'
			/>
			{(showGender && front_female) && <span className='pokeitem__female'>&#9792;</span>}
		</figure>
	);
}
