export interface AsteroidFormProps {
	onSubmit: () => Promise<void>;
	onGenerate: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	asteroidId: string;
}
