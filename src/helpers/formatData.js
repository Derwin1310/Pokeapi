export function formatHeight(height) {
	return height >= 10 ? `${height / 10} m` : `${height}0 cm`;
}

export function formatWeight(weight) {
	const weightInKgs = weight / 10;
	const weightInTons = weightInKgs / 1000;
	return	weightInKgs < 1000 ? `${weightInKgs} kg` : `${weightInTons} ton`;
}

export function getActualPage(pageNumbers) {
	return Math.ceil(pageNumbers / 10) + 1;
}

export function getTotalPages(totalOfPokemons) {	
	return Math.ceil(totalOfPokemons / 10) + 1;
}

export function getLastPokemons(totalOfPokemons) {
	return parseInt(totalOfPokemons / 10, 10) * 10 + 10;
}
