import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';

// UI-Components
import AsteroidInfoWeb from '../AsteroidInfo.web';

// Utils
import * as Utils from '../../../utils/generate-random-number';
import { actDefer } from '../../../utils/test-utils';

// Mocks
import { ASTEROID_IDS_MOCK_WITH_DATA } from '../../../__mocks__/asteroid-ids';
import { ASTEROID_IDS_URL, ASTEROID_INFO_URL } from '../../../__mocks__/urls';
import { mockFetch } from '../../../__mocks__/fetch';

beforeEach(() => {
	jest.spyOn(window, 'fetch').mockImplementation(async (url) => {
		const requestURL = url as unknown as string;
		return await (mockFetch(requestURL) as unknown as Promise<Response>);
	});
});

afterEach(() => {
	jest.restoreAllMocks();
});

describe('Src > Pages > AsteroidInfoWeb', () => {
	test('should works input-field', async () => {
		const { findByPlaceholderText } = render(<AsteroidInfoWeb />);
		await actDefer();

		const asteroidId = '2000433';
		const inputEl = await findByPlaceholderText('Enter Asteroid ID');

		await act(async () => {
			fireEvent.change(inputEl, {
				target: {
					value: asteroidId,
				},
			});
		});

		expect(inputEl).toHaveDisplayValue(asteroidId);
	});

	test('should generate asteroid-id', async () => {
		const RANDOM_INDEX = 2;
		const RANDOM_ASTEROID_ID =
			ASTEROID_IDS_MOCK_WITH_DATA.near_earth_objects[RANDOM_INDEX].id;

		jest.spyOn(Utils, 'generateRandomNumber').mockReturnValueOnce(
			RANDOM_INDEX
		);

		const { findByRole, findByPlaceholderText } = render(
			<AsteroidInfoWeb />
		);
		await actDefer();

		const generateAsteroidIdEl = await findByRole('button', {
			name: 'Generate Asteroid ID',
		});

		await act(async () => {
			fireEvent.click(generateAsteroidIdEl);
		});

		const inputEl = await findByPlaceholderText('Enter Asteroid ID');
		expect(inputEl).toHaveValue(RANDOM_ASTEROID_ID);
	});

	test('should show asteroid-info', async () => {
		const RANDOM_INDEX = 2;
		const RANDOM_ASTEROID_ID =
			ASTEROID_IDS_MOCK_WITH_DATA.near_earth_objects[RANDOM_INDEX].id;

		const { findByRole, findByPlaceholderText } = render(
			<AsteroidInfoWeb />
		);
		await actDefer();

		const inputEl = await findByPlaceholderText('Enter Asteroid ID');
		const submitButtonEl = await findByRole('button', {
			name: 'Submit',
		});

		expect(submitButtonEl).toBeDisabled();

		await act(async () => {
			fireEvent.change(inputEl, {
				target: { value: RANDOM_ASTEROID_ID },
			});
		});

		expect(inputEl).toHaveValue(RANDOM_ASTEROID_ID);

		expect(submitButtonEl).toBeEnabled();

		await act(async () => {
			fireEvent.click(submitButtonEl);
		});
	});

	test('should fail asteroid-ids api', async () => {
		jest.spyOn(window, 'fetch').mockImplementation(async (url) => {
			const requestURL = url as unknown as string;
			if (requestURL === ASTEROID_IDS_URL) {
				return await (console.log(
					'asteroid-ids api failed'
				) as unknown as Promise<Response>);
			}
			return await (mockFetch(requestURL) as unknown as Promise<Response>);
		});

		render(<AsteroidInfoWeb />);
		await actDefer();
	});

	test('should fail asteroid-info api', async () => {
		jest.spyOn(window, 'fetch').mockImplementation(async (url) => {
			const requestURL = url as unknown as string;
			if (requestURL === ASTEROID_INFO_URL) {
				return await (console.log(
					'asteroid-info api failed'
				) as unknown as Promise<Response>);
			}
			return await (mockFetch(requestURL) as unknown as Promise<Response>);
		});
		const RANDOM_INDEX = 2;
		const RANDOM_ASTEROID_ID =
			ASTEROID_IDS_MOCK_WITH_DATA.near_earth_objects[RANDOM_INDEX].id;

		const { findByPlaceholderText, findByRole } = render(
			<AsteroidInfoWeb />
		);
		await actDefer();

		const inputEl = await findByPlaceholderText('Enter Asteroid ID');
		const submitButtonEl = await findByRole('button', {
			name: 'Submit',
		});

		expect(submitButtonEl).toBeDisabled();

		await act(async () => {
			fireEvent.change(inputEl, {
				target: { value: RANDOM_ASTEROID_ID },
			});
		});

		expect(inputEl).toHaveValue(RANDOM_ASTEROID_ID);

		expect(submitButtonEl).toBeEnabled();

		await act(async () => {
			fireEvent.click(submitButtonEl);
		});
	});
});
