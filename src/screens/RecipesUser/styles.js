import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerTitle: {
		paddingTop: 35,
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	view: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleRecipe: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	buttonContainer: {
		backgroundColor: colors.gray,
		margin: 10,
		shadowColor: colors.black,
		shadowRadius: 5,
		shadowOffset: { width: 1, height: 2 },
		elevation: 5,
		padding: 8,
	},
	buttonText: {
		color: colors.white,
		fontSize: 20,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: colors.primary,
	},
});

export default styles;
