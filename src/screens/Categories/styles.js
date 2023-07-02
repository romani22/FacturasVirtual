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
	title: {
		fontSize: 20,
		color: colors.gray,
	},
	boxCardCategory: {
		width: 350,
		height: 180,
		backgroundColor: colors.tertiary,
		marginVertical: 10,
		justifyContent: 'center',
		padding: 15,
		borderRadius: 15,
		shadowColor: colors.black,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 5,
	},
	titleView: {
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.black,
	},
	boxTitle: {
		width: '100%',
		paddingTop: 35,
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'row',
		paddingBottom: 10,
		backgroundColor: colors.fourth,
	},
});

export default styles;
