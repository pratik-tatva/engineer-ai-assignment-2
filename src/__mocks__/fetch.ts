// Mock-URLs
import { ASTEROID_IDS_URL, ASTEROID_INFO_URL } from './urls';

// Mock-Responses
import { ASTEROID_IDS_MOCK_WITH_DATA } from './asteroid-ids';
import { ASTEROID_INFO_MOCK } from './asteroid-info';

// Interfaces
interface MockFetchResponse {
	ok?: boolean;
	status?: number;
	json?: () => Promise<Record<string, unknown>>;
	errorMessage?: string;
}

export function mockFetch(url: string): MockFetchResponse {
	switch (url) {
		case ASTEROID_IDS_URL: {
			return {
				ok: true,
				status: 200,
				json: async () => ASTEROID_IDS_MOCK_WITH_DATA,
			};
		}
		case ASTEROID_INFO_URL: {
			return {
				ok: true,
				status: 200,
				json: async () => ASTEROID_INFO_MOCK,
			};
		}
		default: {
			return {
				errorMessage: 'No mock function found!',
			};
		}
	}
}
