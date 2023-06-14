import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 35,
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
	},
	containerTitle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	view: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
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
});

export default styles;
