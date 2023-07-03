import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	carouselContainer: {
		flexDirection: 'row',
	},
	boxImg: {
		flex: 1,
		width: '100%',
		height: 180,
		shadowColor: colors.danger,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 6,
		elevation: 5,
	},
	image: {
		flex: 1,
	},
});

export default styles;
