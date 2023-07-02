import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	Button: {
		marginHorizontal: 4,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textButton: {
		fontSize: 13,
		color: colors.white,
		textShadowColor: colors.black,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	shadowIcon: {
		textShadowColor: colors.black,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	tabBar: {
		backgroundColor: colors.fifty,
		paddingTop: 5,
		height: 70,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 5,
	},
});

export default styles;
