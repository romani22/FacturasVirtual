import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
	},
	title: {
		fontSize: 20,
		color: colors.gray,
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
		backgroundColor: colors.tertiary,
	},
});

export default styles;
