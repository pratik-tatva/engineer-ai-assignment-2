const API_PREFIX = 'https://api.nasa.gov';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const API_ROUTES_PARAMS = {
	ASTEROID_KEY: ':key',
};

export const API_ROUTES = {
	ASTEROID_INFO: `${API_PREFIX}/neo/rest/v1/neo/${API_ROUTES_PARAMS.ASTEROID_KEY}?api_key=${API_KEY}`,
	ASTEROID_ID: `${API_PREFIX}/neo/rest/v1/neo/browse?api_key=${API_KEY}`,
};
