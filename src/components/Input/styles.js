import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	formControl: {
		width: '100%',
	},
	label: {
		marginVertical: 8,
	},
	input: {
		height: 35,
		borderColor: colors.gray,
		borderWidth: 1,
		borderRadius: 10,
		minWidth: 250,
		width: '100%',
		padding: 5,
		backgroundColor: colors.white,
		elevation: 7,
		paddingHorizontal: 2,
		paddingVertical: 5,
	},
	errorContainer: {
		marginTop: 6,
		marginBottom: 6,
	},
	errorText: {
		color: 'red',
	},
});

export default styles;
