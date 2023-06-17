import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 35,
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
	},
	view: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: colors.primary,
	},
});

export default styles;
