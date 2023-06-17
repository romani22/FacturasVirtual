import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 50,
	},
	view: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	image: {
		width: '100%',
		height: 100,
		backgroundColor: colors.primary,
	},
});

export default styles;
