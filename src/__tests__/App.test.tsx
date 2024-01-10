import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import App from '../App';

describe('Src > App', () => {
	test('should render app component', () => {
		render(<App />);

		const formTitle = screen.getByText(/Get Asteroid Info/i);
		expect(formTitle).toBeInTheDocument();
	});
});
