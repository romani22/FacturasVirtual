import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	containerHeader: {
		backgroundColor: colors.fifty,
		paddingVertical: 10,
		marginBottom: 10,
	},
	containerBody: {
		paddingHorizontal: 15,
		flex: 1,
	},
	title: {
		color: colors.white,
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	searchInput: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		padding: 8,
		marginBottom: 16,
	},
	ingredientItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	checkbox: {
		width: 20,
		height: 20,
		marginRight: 10,
		borderWidth: 1,
		borderColor: '#ccc',
	},
	checkboxSelected: {
		backgroundColor: 'lightblue',
	},
	ingredientName: {
		flex: 1,
		fontSize: 16,
	},
	quantityInput: {
		width: 80,
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 8,
	},
	saveButton: {
		backgroundColor: 'green',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
	},
	saveButtonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default styles;
