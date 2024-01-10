// Styles
import { makeStyles } from '@material-ui/core/styles';

export const useAsteroidFormStyles = makeStyles({
	formWrapper: {
		width: '450px',
		height: 'auto',
		padding: '16px',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		boxShadow: '1px 1px 4px lightgray',
		borderRadius: '4px',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '16px',
	},
	formButtonContainer: {
		display: 'flex',
		gap: '16px',
		marginTop: '16px',
	},
});
