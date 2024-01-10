// Components
import { generateRandomNumber } from '../generate-random-number';

describe('Src > Utils', () => {
	test('should return number in generateRandomNumber function', () => {
		expect(generateRandomNumber(1, 10)).not.toBeNaN();
	});
});
