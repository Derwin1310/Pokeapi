export function formatHeight(height) {
	return height >= 10 ? `${height / 10} m` : `${height}0 cm`;
}

export function formatWeight(weight) {
	const weightInKgs = weight / 10;
	const weightInTons = weightInKgs / 1000;
	return	weightInKgs < 1000 ? `${weightInKgs} kg` : `${weightInTons} ton`;
}
