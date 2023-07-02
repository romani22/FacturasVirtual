import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	ViewIngredientsHeaders: {
		flexDirection: 'row',
		alignItems: 'center',

		backgroundColor: colors.gray,
	},
	columnaHeader: {
		color: colors.white,
		fontWeight: 'bold',
		width: '50%',
		borderColor: colors.black,
		borderWidth: 1,
		padding: 10,
	},
	ViewIngredients: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	nameIngredients: {
		width: '50%',
		padding: 3,
		fontWeight: 'bold',
		borderColor: colors.black,
		borderWidth: 1,
	},
	quantityIngredients: {
		borderColor: colors.black,
		borderWidth: 1,
		padding: 3,
		width: '50%',
		flex: 1,
	},
});

export default styles;
