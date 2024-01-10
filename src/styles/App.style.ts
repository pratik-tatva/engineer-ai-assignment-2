// Styles
import { type Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useAsteroidFormStyles = makeStyles((theme: Theme) =>
	createStyles({
		app: {
			width: '100%',
			height: '100vh',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
		},
	})
);
