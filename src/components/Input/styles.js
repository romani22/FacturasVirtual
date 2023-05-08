import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	input: {
		height: 35,
		borderColor: colors.black,
		borderWidth: 1,
		borderRadius: 10,
		width: '100%',
		padding: 5,
		backgroundColor: colors.white,
		shadowColor: colors.black,
		shadowOffset: { width: 3, height: 3 },
		shadowRadius: 10,
		shadowOpacity: 0.8,
		elevation: 7,
	},
});

export default styles;
