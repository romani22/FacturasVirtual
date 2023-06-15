import { View, Text } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';

const RecipeDetail = () => {
	const Recipe = useSelector((state) => state.recipe.selected);
	return (
		<View style={styles.container}>
			<View style={styles.view}>
				<Text>{Recipe}</Text>
			</View>
		</View>
	);
};

export default RecipeDetail;
