import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: { padding: 10 },
	Card: {
		backgroundColor: colors.tertiary,
		borderRadius: 15,
		shadowColor: colors.black,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 6,
		elevation: 5,
	},
	containerHeader: {
		padding: 15,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		flexDirection: 'row',
		backgroundColor: colors.fourth,
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		width: '90%',
	},
	Listado: {
		paddingHorizontal: 20,
		paddingBottom: 10,
	},
	boxIngredient: {
		flexDirection: 'row',
	},
	textIngredient: {
		fontWeight: 'bold',
		marginRight: 15,
		width: '50%',
	},
});

export default styles;
