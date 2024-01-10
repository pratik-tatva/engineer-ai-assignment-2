import React from 'react';

// Third-Party-Library
import { TextField, Button } from '@material-ui/core';

// Styles
import { useAsteroidFormStyles } from './AsteroidForm.style';

// Interfaces
import type { AsteroidFormProps } from './AsteroidForm.interface';

const AsteroidForm = ({
	asteroidId,
	onGenerate,
	onChange,
	onSubmit,
}: AsteroidFormProps): React.ReactNode => {
	const classes = useAsteroidFormStyles();

	return (
		<div className={classes.formWrapper}>
			<h1>Get Asteroid Info</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
				className={classes.form}
			>
				<TextField
					value={asteroidId}
					onChange={onChange}
					variant="standard"
					placeholder="Enter Asteroid ID"
				/>
				<div className={classes.formButtonContainer}>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={asteroidId === ''}
					>
						Submit
					</Button>
					<Button
						onClick={onGenerate}
						variant="contained"
						color="secondary"
					>
						Generate Asteroid ID
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AsteroidForm;
