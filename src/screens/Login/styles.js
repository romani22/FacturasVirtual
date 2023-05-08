import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.tertiary,
		width: '100%',
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
	buttonLogin: {
		backgroundColor: colors.gray,
		marginTop: 30,
		shadowColor: colors.black,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 2 },
		elevation: 5,
	},
});

export default styles;
