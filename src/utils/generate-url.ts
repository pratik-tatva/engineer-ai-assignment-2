interface RouterParams {
	key: string;
	value: string;
}

interface GenerateURLParams {
	path: string;
	routeParams: RouterParams[];
}

type GenerateURL = (params: GenerateURLParams) => string;

export const generateURL: GenerateURL = ({ path, routeParams }) => {
	let generatedURL = path;

	routeParams.forEach(({ key, value }) => {
		generatedURL = generatedURL.replace(key, value);
	});

	return generatedURL;
};
