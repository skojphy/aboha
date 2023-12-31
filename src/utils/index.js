export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isSameDate = (date1, date2) => {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
};
