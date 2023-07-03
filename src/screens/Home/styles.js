import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
	},
	view: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: 10,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: colors.primary,
	},
	title: {
		width: 300,
		fontSize: 20,
		textAlign: 'center',
	},
	boxCarrousel: {
		flex: 1,

		height: 200,
		shadowColor: colors.danger,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 4,
		elevation: 6,
	},
	boxRecipe: {
		width: '100%',
		backgroundColor: colors.danger,
	},
	card: {
		flexDirection: 'row',
		backgroundColor: colors.blue,
	},
	boxTouchable: {
		width: '50%',
		backgroundColor: 'green',
	},
});

export default styles;
