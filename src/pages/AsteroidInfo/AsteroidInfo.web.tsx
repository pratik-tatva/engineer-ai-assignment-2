import React from 'react';

// UI-Components
import AsteroidForm from '../../components/forms/AsteroidForm';
import AsteroidInfo from '../../components/AsteroidInfo';

// Controllers
import AsteroidInfoController from './AsteroidInfoController';

class AsteroidInfoWeb extends AsteroidInfoController {
	render(): React.ReactNode {
		return (
			<>
				<AsteroidForm
					asteroidId={this.state.form.asteroidId}
					onChange={this.handleInputChange}
					onGenerate={this.handleGenerateId}
					onSubmit={this.handleSubmit}
				/>
				<AsteroidInfo data={this.state.asteroidInfo} />
			</>
		);
	}
}

export default AsteroidInfoWeb;
