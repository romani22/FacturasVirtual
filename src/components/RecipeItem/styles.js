import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	placeItem: {
		borderBottomColor: colors.gray,
		borderBottomWidth: 3,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 15,
		marginHorizontal: 10,
		marginVertical: 5,
		paddingVertical: 10,
		paddingHorizontal: 30,
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: colors.primary,
	},
	info: {
		marginLeft: 25,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	title: {
		color: colors.black,
		fontSize: 18,
		marginBottom: 6,
	},
	description: {
		color: '#777',
	},
});

export default styles;
