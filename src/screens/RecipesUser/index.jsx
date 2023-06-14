import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import RecipeItem from '../../components/RecipeItem';

const RecipesUser = ({ navigation }) => {
	const recipes = useSelector((state) => state.recipe.recipe);
	const renderItem = ({ item }) => (
		<RecipeItem
			title={item.title}
			image={item.image}
			description={item.description}
			onSelect={() => navigator.navigate('RecipeDetail', { placeId: item.id })}
		/>
	);
	const changeviewAdd = () => {
		navigation.navigate('newRecipe');
	};
	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.titleRecipe}>Listado Creadas</Text>
				<Button
					title={'+'}
					buttonStyle={styles.buttonContainer}
					textStyle={styles.buttonText}
					actionPress={() => changeviewAdd()}
				/>
			</View>

			<FlatList data={recipes} keyExtractor={(item) => item.id} renderItem={renderItem} />
		</View>
	);
};

export default RecipesUser;
