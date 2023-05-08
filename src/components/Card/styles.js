import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		width: 300,
		maxWidth: '80%',
		padding: 20,
		alignItems: 'center',
		shadowColor: colors.black,
		shadowRadius: 5,
		shadowOpacity: 0.7,
		elevation: 7,
		borderRadius: 10,
		backgroundColor: colors.white,
	},
});

export default styles;