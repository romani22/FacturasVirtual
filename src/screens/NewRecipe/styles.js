import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	TextTitle: {
		fontSize: 25,
		marginBottom: 25,
	},
	scrollViewContent: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		paddingTop: 45,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		padding: 15,
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
	input: {
		width: '90%',
		backgroundColor: '#bcc4be84',
		borderRadius: 15,
		borderBottomColor: '#000000',
		borderBottomWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 10,
		paddingVertical: 4,
	},
	button: {
		backgroundColor: colors.blue,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: colors.gray,
		borderBottomWidth: 3,
	},
	textButton: {
		color: colors.white,
	},
});

export default styles;
