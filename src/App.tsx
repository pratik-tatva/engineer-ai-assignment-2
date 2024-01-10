import React from 'react';

// Styles
import { useAsteroidFormStyles } from './styles/App.style';

// Pages
import AsteroidInfo from './pages/AsteroidInfo';

function App(): React.ReactNode {
	const classes = useAsteroidFormStyles();

	return (
		<div className={classes.app}>
			<AsteroidInfo />
		</div>
	);
}

export default App;
