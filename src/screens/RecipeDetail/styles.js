import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingTop: 40,
		paddingBottom: 40,
	},
	view: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	viewDescription: {
		flex: 3,
		backgroundColor: colors.primary,
		marginTop: 15,
		padding: 15,
		borderRadius: 15,
		width: '100%',
		shadowColor: colors.black,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 5,
	},
	image: {
		flex: 1,
		width: '100%',
		borderRadius: 15,
		minHeight: 250,
		backgroundColor: colors.primary,
	},
	boxHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 15,
	},
	boxTitle: {
		minHeight: 35,
		width: '85%',
	},
	title: {
		fontSize: 27,
		color: colors.fourth,
		fontWeight: 'bold',
	},
	boxStar: {
		width: '15%',
	},
	description: {
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	steps: {
		fontSize: 16,
		textAlign: 'left',
	},
	boxSteps: {
		maxHeight: '100%',
	},
	ViewIngredients: { flexDirection: 'row' },
	boxIngredients: { flex: 1, width: '100%' },
	quantityIngredients: { fontSize: 16 },
	nameIngredients: {
		fontSize: 16,
		fontWeight: '800',
		marginRight: 4,
	},
	buttonStar: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
