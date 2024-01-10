// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AsteroidInfoProps {}

export interface AsteroidInfoState {
	form: {
		asteroidId: string;
	};
	asteroidInfo: Record<string, string>;
	asteroidIds: string[];
}
