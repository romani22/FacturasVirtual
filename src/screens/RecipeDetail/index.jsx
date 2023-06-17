import { View, Text, Image } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

const RecipeDetail = () => {
	const Recipe = useSelector((state) => state.recipe.select);

	if (Recipe && Recipe.length > 0) {
		return (
			<View style={styles.container}>
				<Card>
					<View style={styles.view}>
						<Text style={styles.title}>{Recipe[0].title}</Text>

						<Image style={styles.image} source={{ uri: Recipe[0].image }} />

						<View style={styles.viewDescription}>
							<Text style={styles.description}>{Recipe[0].description}</Text>
							<Text style={styles.steps}>{Recipe[0].steps}</Text>
						</View>
					</View>
				</Card>
			</View>
		);
	}
	return null;
};

export default RecipeDetail;
