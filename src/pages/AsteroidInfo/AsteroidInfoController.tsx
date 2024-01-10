import { Component } from 'react';

// Types
import type {
	AsteroidInfoProps,
	AsteroidInfoState,
} from './AsteroidInfo.interface';

// Services
import { getAsteroidIds, getAsteroidInfo } from '../../services/asteroid';

// Utils
import { generateRandomNumber } from '../../utils/generate-random-number';

class AsteroidInfoController extends Component<
	AsteroidInfoProps,
	AsteroidInfoState
> {
	constructor(props: AsteroidInfoProps) {
		super(props);
		this.state = {
			form: {
				asteroidId: '',
			},
			asteroidInfo: {},
			asteroidIds: [],
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleGenerateId = this.handleGenerateId.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount(): Promise<void> {
		try {
			const response = await getAsteroidIds();
			const ids = response.near_earth_objects.map(
				(item: Record<string, string>) => item.id
			);

			if (ids.length > 0) {
				this.setState({
					asteroidIds: ids,
				});
			}
		} catch (error) {
			console.log(
				'Pages > AsteroidInfoController > componentDidMount > getAsteroidIds'
			);
		}
	}

	handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const inputValue = e.target.value;
		this.setState({
			form: {
				asteroidId: inputValue,
			},
		});
	}

	handleGenerateId(): void {
		if (this.state.asteroidIds.length >= 1) {
			const startIndex = 0;
			const lastIndex = this.state.asteroidIds.length - 1;

			const randomIndex = generateRandomNumber(startIndex, lastIndex);

			const randomAsteroidId = this.state.asteroidIds[randomIndex];

			if (randomAsteroidId) {
				this.setState({
					form: {
						asteroidId: randomAsteroidId,
					},
				});
			}
		}
	}

	async handleSubmit(): Promise<void> {
		const asteroidId = this.state.form.asteroidId;
		if (asteroidId) {
			try {
				const response = await getAsteroidInfo(asteroidId);
				const id = response.id;
				const name = response.name;
				const nasaJplURL = response.nasa_jpl_url;
				const isPotentiallyHazardousAsteroid =
					response.is_potentially_hazardous_asteroid;

				this.setState({
					asteroidInfo: {
						id,
						name,
						nasaJplURL,
						isPotentiallyHazardousAsteroid,
					},
				});
			} catch (error) {
				console.log(
					'Pages > AsteroidInfoController > handleSubmit > getAsteroidInfo'
				);
			}
		}
	}
}

export default AsteroidInfoController;
