import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	containerButton: {
		flexDirection: 'row',
		width: 500,
		maxWidth: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.fifty,
	},
	SizeLogin: {
		width: 30,
		height: 30,
	},
	Button: {
		marginHorizontal: 4,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonUbication: {
		flex: 1,
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
});

export default styles;
