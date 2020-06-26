export const capitalizeFirstLetter = (string) => {
	if (typeof string !== 'string') return '';
	else return string.charAt(0).toUpperCase() + string.slice(1);
};

export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
