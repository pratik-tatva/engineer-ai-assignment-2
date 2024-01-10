type GenerateRandomNumber = (min: number, max: number) => number;

export const generateRandomNumber: GenerateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
