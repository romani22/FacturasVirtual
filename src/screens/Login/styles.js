import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.tertiary,
	},
	imgFondo: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
	CardLogin: {
		backgroundColor: '#e5e4e4',
		shadowColor: colors.white,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 6,
		shadowOpacity: 0.7,
		elevation: 2,
	},
	titleLogin: {
		fontSize: 25,
		fontFamily: 'Sigmar-Regular',
		marginBottom: 10,
		color: colors.gray,
		textShadowColor: '#8a8a8a',
		textShadowOffset: { width: 1, height: 3 },
		elevation: 2,
		textShadowRadius: 15,
	},
	buttonSingUp: {
		backgroundColor: colors.gray,
		margin: 10,
		marginTop: 30,
		shadowColor: colors.black,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 2 },
		elevation: 5,
	},
	buttonLogin: {
		backgroundColor: colors.gray,
		margin: 10,
		marginTop: 30,
		shadowColor: colors.black,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 2 },
		elevation: 5,
	},
	boxButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
