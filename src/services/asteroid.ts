// Constants
import { API_ROUTES, API_ROUTES_PARAMS } from '../constants/api-routes';

// Utils
import { generateURL } from '../utils/generate-url';

export const getAsteroidInfo = async (asteroidId: string) => {
	const asteroidInfoURL = generateURL({
		path: API_ROUTES.ASTEROID_INFO,
		routeParams: [
			{ key: API_ROUTES_PARAMS.ASTEROID_KEY, value: asteroidId },
		],
	});

	try {
		const response = await fetch(asteroidInfoURL);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log('Services > getAsteroidInfo');
	}
};

export const getAsteroidIds = async () => {
	try {
		const response = await fetch(API_ROUTES.ASTEROID_ID);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log('Services > getAsteroidIds');
	}
};
