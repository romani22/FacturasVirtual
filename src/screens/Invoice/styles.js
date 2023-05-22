import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
	containerTable: {
		flexDirection: 'row',
	},
	TableContainer: {
		flex: 1,
	},
	textTable: {
		color: colors.black,
		fontSize: 20,
		textAlign: 'center',
		width: '33%',
	},
});

export default styles;
