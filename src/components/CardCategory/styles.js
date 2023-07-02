import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 5,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: colors.black,
		shadowRadius: 5,
		shadowOpacity: 0.7,
		elevation: 7,
		borderRadius: 10,
		backgroundColor: colors.white,
	},
	categoryIcon: {
		width: '100%',
		height: 100,
		backgroundColor: colors.darkBlue,
		borderRadius: 10,
	},
});

export default styles;
