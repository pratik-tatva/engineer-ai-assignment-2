import React from 'react';
import { render, screen } from '@testing-library/react';
import AsteroidInfo from '../AsteroidInfo';

describe('Src > Components > AsteroidInfo', () => {
	test('Is Dynamic data works?', async () => {
		const mockData = {
			id: '2001915',
			name: '1915 Quetzalcoatl (1953 EA)',
			nasaJplURL:
				'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2001915',
			isPotentiallyHazardousAsteroid: 'false',
		};
		render(<AsteroidInfo data={mockData} />);

		const renderText = await screen.findByTestId('id_2001915');
		expect(renderText).toBeVisible();
	});
});
