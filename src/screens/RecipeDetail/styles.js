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
	viewDescription: {
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
		width: '100%',
		height: 150,
		borderRadius: 15,
		backgroundColor: colors.primary,
	},
	title: {
		fontSize: 27,
		color: colors.fourth,
		fontWeight: 'bold',
		position: 'absolute',
		top: 0,
	},
	description: {
		fontSize: 18,
		textAlign: 'center',
	},
	steps: {
		fontSize: 12,
		textAlign: 'left',
	},
});

export default styles;
