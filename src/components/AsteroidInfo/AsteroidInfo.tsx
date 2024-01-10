import React from 'react';

// Styles
import { useAsteroidInfoStyles } from './AsteroidInfo.style';

// Interfaces
import type { AsteroidInfoProps } from './AsteroidInfo.interface';

const AsteroidInfo = ({ data }: AsteroidInfoProps): React.ReactNode => {
	const classes = useAsteroidInfoStyles();

	return (
		<ul className={classes.listWrapper}>
			{Object.entries(data).map((item) => {
				const [key, value] = item;
				return (
					<li
						data-testid={`${key}_${value as string}`}
						className={classes.listItem}
						key={`${key}_${value as string}`}
					>
						<b>{key}</b> : {String(value)}
					</li>
				);
			})}
		</ul>
	);
};

export default AsteroidInfo;
