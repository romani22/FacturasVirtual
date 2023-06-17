import { View, Text, Image } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

const RecipeDetail = () => {
	const Recipe = useSelector((state) => state.recipe.select);
	return (
		<View style={styles.container}>
			<Card>
				<View style={styles.view}>
					<Text>{Recipe[0].title}</Text>
					<Image style={styles.image} source={{ uri: Recipe[0].image }} />
					<Text>{Recipe[0].description}</Text>
					<Text>{Recipe[0].steps}</Text>
				</View>
			</Card>
		</View>
	);
};

export default RecipeDetail;
